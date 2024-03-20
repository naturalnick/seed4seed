import gspread 

class DummyData:
    def __init__(self):
        gc = gspread.service_account()
        spreadsheet = gc.open("Dummy Data - Seed4Seed")

        self.user_data = spreadsheet.worksheet("user_data").get_all_records()
        self.transaction_data = spreadsheet.worksheet("transaction_data").get_all_records()
        self.listings = spreadsheet.worksheet("listings").get_all_records()
        self.user_profile_info = spreadsheet.worksheet("user_profile_info").get_all_records()
        self.seller_page_info = spreadsheet.worksheet("seller_page_info").get_all_records()
        self.seller_reviews = spreadsheet.worksheet("seller_reviews").get_all_records()
        self.listing_reviews = spreadsheet.worksheet("listing_reviews").get_all_records()
        self.active_transactions = spreadsheet.worksheet("active_transactions").get_all_records()

dd = DummyData()
print(dd.user_data)

