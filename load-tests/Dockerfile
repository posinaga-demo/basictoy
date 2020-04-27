FROM locustio/locust
ADD load-tests/locustfile.py locustfile.py
ENTRYPOINT ["locust", "-host", "https://www.google.com"]