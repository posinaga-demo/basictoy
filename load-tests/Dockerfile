FROM locustio/locust
ADD load-tests/locustfile.py locustfile.py
ENTRYPOINT ["locust", "-h", "https://www.google.com"]