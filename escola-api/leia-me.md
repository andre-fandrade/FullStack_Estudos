# API REST - DRF
#### Configuração Django

**1°** Criar projeto padrão pycharm. <br>
**2°** Instalar pacote Django `pip install django==2.2.9` (Versão **LTS** até **2021**)<br>
**3°** Iniciar Projeto `django-admin startproject nome-projeto .` <br>
**4°** Criar Aplicação `django-admin startapp nome-aplicacao`<br>
**5°** Configurações em > **Settings.py** : <br>
--> _INSTALLED_APPS_ = `'nome-aplicacao',` <br>
--> _LANGUAGE_CODE_ = `'pt-br'`<br>
--> _TIME_ZONE_ = `'America/Sao_Paulo'`<br>
--> _STATIC_ROOT_ = `os.path.join(BASE_DIR, 'staticfiles')`<br>
--> _MEDIA_URL_ = `'media/'`<br>
--> _MEDIA_ROOT_ = `os.path.join(BASE_DIR, 'media')`<br>

#### Configuração Django Rest Framework

**1°** Instalação e Dependências `pip install djangorestframework markdown django-filter`<br>
**2°** Salvando versões dos pacotes `pip freeze > requirements.txt`<br>
**3°** Configurações em > **Settings.py** : <br>
--> _INSTALLED_APPS_ = `'django_filters', 'rest_framework',` <br>


    