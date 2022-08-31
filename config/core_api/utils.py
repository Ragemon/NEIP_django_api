# from .models import Person
import random


def gen_id_code():
    return "NEIP" + str(random.randint(100000, 1000000))


# def gen_id_code():
#     not_exist = True
#     while not_exist:
#         code = "NEIP" + str(random.randint(100000, 1000000))
#         person_code = Person.objects.all()
#         if code not in person_code.code:
#             not_exist = False
#             return code


# region = ((AHAFO, "AHAFO")
# (ASHANTI, "ASHANTI")
# (BONO_EAST, "BONO EAST")
# (BRONG_AHAFO, "BRONG AHAFO")
# (CENTRAL, "CENTRAL")
# (EASTERN, "EASTERN")
# (GREATER_ACCRA, "GREATER ACCRA")
# (NORTH_EAST, "NORTH EAST")
# (NORTHERN, "NORTHERN")
# (OTI, "OTI")
# (SAVANNAH, "SAVANNAH")
# (UPPER_EAST, "UPPER EAST")
# (UPPER_WEST, "UPPER WEST")
# (WESTERN_SEKONDI, "WESTERN SEKONDI")
# (WESTERN_NORTH, "WESTERN NORTH")
# (VOLTA, "VOLTA"))


# AHAFO = "ah"
# ASHANTI = "as"
# BONO_EAST = "be"
# BRONG_AHAFO = "ba"
# CENTRAL = "ce"
# EASTERN = "ea"
# GREATER_ACCRA = "ga"
# NORTH_EAST = "ne"
# NORTHERN = "no"
# OTI = "ot"
# SAVANNAH = "sa"
# UPPER_EAST = "ue"
# UPPER_WEST = "uw"
# WESTERN_SEKONDI = "ws"
# WESTERN_NORTH = "wn"
# VOLTA = "vo"


# "ah", "AHAFO"
# "as", "ASHANTI"
# "be", "BONO EAST"
# "ba", "BRONG AHAFO"
# "ce", "CENTRAL"
# "ea", "EASTERN"
# "ga", "GREATER ACCRA"
# "ne", "NORTH EAST"
# "no", "NORTHERN"
# "ot", "OTI"
# "sa", "SAVANNAH"
# "ue", "UPPER EAST"
# "uw", "UPPER WEST"
# "ws", "WESTERN SEKONDI"
# "wn", "WESTERN NORTH"
# "vo", "VOLTA"
