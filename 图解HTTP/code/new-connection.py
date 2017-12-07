#!/usr/bin/env python

# Using new TCP connection for each HTTP request

import os
import json
import time
import logging
import requests
from requests.auth import HTTPBasicAuth

logging.basicConfig(level=logging.DEBUG)
start_time = time.time()

def get_venmo_data(limit):
  url = "https://venmo.com/api/v5/public?limit={}"
  for i in range(50):
    response = requests.get(url.format(limit))
    response_dict = json.loads(response.text)
    for transaction in response_dict["data"]:
      print(transaction["message"])
    url = response_dict["paging"]["next"] + "&limit={}"

if __name__ == "__main__":
  limit = 1
  get_venmo_data(limit)
  print("--- %s seconds ---" % (time.time() - start_time))