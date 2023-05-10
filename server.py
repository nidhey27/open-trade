import grpc
import image_pb2
import image_pb2_grpc

class ImageHandler(image_pb2_grpc.ImageServiceServicer):
    def SendImage(self, request, context):
        return request

def serve():
    server = grpc.server(grpc.insecure_channel("[::]:50051"))
    image_pb2_grpc.add_ImageServiceServicer_to_server(ImageHandler(), server)
    server.start()
    print("Server started on [::]:50051")
    server.wait_for_termination()

if __name__ == "__main__":
    serve()
