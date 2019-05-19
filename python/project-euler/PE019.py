"""
How many Sundays fell on the first of the month during the 
twentieth century (1 Jan 1901 to 31 Dec 2000)?
"""

import datetime


class PE019:
  def count_sundays(self):
    sundays = 0
    for year in range(1901, 2000+1):
      for month in range(1, 12+1):
        if datetime.datetime(year, month, 1).isoweekday() == 7:
          sundays += 1
    return sundays


# test
test = PE019()
print(test.count_sundays())  # 171
