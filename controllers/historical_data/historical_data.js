var yahooFinance = require('yahoo-finance');

exports.getData = async (req, res, next) => {

  var body = req.query

  if (body.symbol == undefined || body.from == undefined || body.to == undefined){
    return res.status(400).json({
      message: "symbol, from & to date is required",
      error: null,
      data: []
    })
  }

  var period = body.period || 'd'

  console.log({
    symbol: body.symbol,
    from: body.from,
    to: body.to,
    period: period
  });
  // https://3000-nidhey27-opentrade-ft2c8sm1xbz.ws-us93.gitpod.io/api/v1/historical-data?symbol=AAPL&from=2012-01-01&to=2012-12-31
  yahooFinance.historical({
    symbol: body.symbol,
    from: body.from,
    to: body.to,
    period: period
    
    // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
  }, function (err, quotes) {
    
    console.log(err);
    if(err != null){
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
}

