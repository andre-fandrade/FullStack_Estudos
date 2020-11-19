from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Curso, Avaliacao
from .serializers import CursoSerializer, AvaliacaoSerializer


class CursosAPIView(APIView):
    """
    API de Cursos André
    """
    def get(self, request):
        cursos = Curso.objects.all()
        serializer = CursoSerializer(cursos, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CursoSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        print(type(serializer.data))
        return Response({"Mensagem":"Criado com sucesso!",
                         "Titulo": serializer.data['titulo'],
                         "Item Criado": serializer.data},
                         status.HTTP_201_CREATED)


class AvaliacaoAPIView(APIView):
    """
    API DE Avaliações André
    """
    def get(self, request):
        print(dir(request))
        avaliacoes = Avaliacao.objects.all()
        serializer = AvaliacaoSerializer(avaliacoes, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = AvaliacaoSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status.HTTP_201_CREATED)
