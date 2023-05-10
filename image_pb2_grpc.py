# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import image_pb2 as image__pb2


class ImageServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.SendImage = channel.unary_unary(
                '/ImageService/SendImage',
                request_serializer=image__pb2.Image.SerializeToString,
                response_deserializer=image__pb2.Image.FromString,
                )


class ImageServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def SendImage(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_ImageServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'SendImage': grpc.unary_unary_rpc_method_handler(
                    servicer.SendImage,
                    request_deserializer=image__pb2.Image.FromString,
                    response_serializer=image__pb2.Image.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'ImageService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class ImageService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def SendImage(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/ImageService/SendImage',
            image__pb2.Image.SerializeToString,
            image__pb2.Image.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
