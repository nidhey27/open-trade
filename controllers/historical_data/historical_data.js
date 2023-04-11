var yahooFinance = require('yahoo-finance');

exports.getData = async (req, res, next) => {

  try {
    var body = req.query

    if (body.from == undefined || body.to == undefined) {
      const timestamp = Date.now();
      const dateObj = new Date(timestamp);

      const year = dateObj.getFullYear();
      const month = String(dateObj.getMonth() + 1).padStart(2, '0');
      const day = String(dateObj.getDate()).padStart(2, '0');

      const oneYearAgo = new Date(dateObj.getFullYear() - 1, dateObj.getMonth(), dateObj.getDate());

      const oneYearAgoYear = oneYearAgo.getFullYear();
      const oneYearAgoMonth = String(oneYearAgo.getMonth() + 1).padStart(2, '0');
      const oneYearAgoDay = String(oneYearAgo.getDate()).padStart(2, '0');

      const oneYearAgoDate = `${oneYearAgoYear}-${oneYearAgoMonth}-${oneYearAgoDay}`;
      const curreantDate = `${year}-${month}-${day}`;

      body.from = oneYearAgoDate
      body.to = curreantDate
    }

    if (body.symbol == undefined) {
      return res.status(400).json({
        message: "symbol is required",
        error: null,
        data: []
      })
    }

    var period = body.period || 'd'

    // <DOMAIN_NAME>/api/v1/historical-data?symbol=AAPL&from=2012-01-01&to=2012-12-31
    await yahooFinance.historical({
      symbol: body.symbol,
      from: body.from,
      to: body.to,
      period: period
      // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
    }, function (err, quotes) {
      if (err != null) {
        return res.status(500).json({
          message: null,
          error: err,
          data: quotes
        })

      }

      return res.status(200).json({
        message: `${body.symbol} data fetched!`,
        error: null,
        data: quotes
      })
    });
  }catch(err) {
    return res.status(500).json({
      message: null,
      error: err,
      data: quotes
    })
  }
}

