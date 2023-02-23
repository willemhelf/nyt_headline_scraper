# NYT Headline Scraper

#### What is it?

This is a small script that counts the number of times a word or phrase appears in headlines in the New York Times. This is meant to be used as a snippet injected into the site via the JavaScript console.

### Background

The New York Times website has a "search" function that can search for instances of words/phrases used in its articles. However, this function returns not just headlines but all text that contains said search term. This script specifically searches only headlines for terms.

This is a very "manual" way to count the usages of a search term and, if your initial search term returns many results, can be tedious. The New York Times API, however, excludes some data, which ends up giving us an innacurate count.

### How do I use it?

Navigate to the New York Times website and enter the desired word or phrase into the "search" box on the upper left corner of the webpage.

This should lead to a webpage with a list of every article that include the word. **Note: not all headlines will load on the webpage at once. For accurate reults, you will have to use the "show more" button until all articles are shown on the page.** I'm not smart enough to figure a way around this yet :)

Once you have loaded all search results on the webpage, open the JavaScript console and navigate to ``sources`` at the top of the screen; from there, click the two
arrows on the upper left corner and select ``snippets``. This is where you can run custom JavaScript.

Paste this code into an empty snippet, placing the desired search term in the function call on line 13. **This is case-sensitive; unless you are searching for a preposition etc I would make sure to capitalize the first letter.**

Run the code and see results in the console!
