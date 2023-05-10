import grpc
import image_pb2
import image_pb2_grpc

def run():
    channel = grpc.insecure_channel("[::]:50051")
    stub = image_pb2_grpc.ImageServiceStub(channel)

    with open("myimg.png", "rb") as f:
        image_data = f.read()

    image = image_pb2.Image(data=image_data)
    response = stub.SendImage(image)

    with open("received_image.png", "wb") as f:
        f.write(response.data)

if __name__ == "__main__":
    run()
