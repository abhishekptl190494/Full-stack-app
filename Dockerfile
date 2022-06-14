FROM python:3.10.4
ENV PYTHONUNBUFFERED=1
RUN apt-get update && \
    apt-get install --no-install-recommends -y gcc python3-dev default-libmysqlclient-dev &&\
    apt-get clean
RUN mkdir /app
WORKDIR /app
COPY /django/requirements.txt /app/
RUN pip install -r requirements.txt
COPY /django/ /app/