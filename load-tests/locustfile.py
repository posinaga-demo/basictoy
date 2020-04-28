from locust import HttpLocust, TaskSet, task, between

class MyTaskSet(TaskSet):
    @task
    def my_task(self):
        self.client.get("/")
        pass
    @task
    def about_task(self):
        self.client.get("/about")
        pass
    # @task
    # def my_failing_task(self):
    #     self.client.get("/pirulo")
    #     pass

class User(HttpLocust):
    task_set = MyTaskSet
    wait_time = between(5, 15)