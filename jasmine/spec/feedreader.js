/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against this application.
 */

$(function() {
    /* This is the first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         /* A test that loops through each feed in the allFeeds object 
         * and ensures it has a URL defined and that the URL is not empty.
         */
        it('it has a URL defined', function() {
            allFeeds.forEach(function(feedURL) {
                expect(feedURL.url).toBeDefined();
                expect(feedURL.url).not.toBe(" ");
                expect(feedURL.url.length).not.toBe(0);
            });
        });

         /* This test loops through each feed in the allFeeds object and ensures
         *  it has a name defined and that the name is not empty.
         */
         it('it has a URL defined', function() {
            allFeeds.forEach(function(feedNAME) {
                expect(feedNAME.name).toBeDefined();
                expect(feedNAME.name).not.toBe(" ");
                expect(feedNAME.name.length).not.toBe(0);
            });
        });
    });


    /* This is the second test suite named "The menu" */

        /* This test suite test to ensures that the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
    describe('The menu', function(){
        it('hidden by default', function(){
            var isMenuHidden = $("body").hasClass("menu-hidden");
            expect(isMenuHidden).toBe(true);
        });
    });    

          /* This test ensures that the menu changes visibility when the
          *  menu icon is clicked. This test should have two expectations:
          *  does the menu display when clicked and does it hide when clicked again.
          */
          it('The menu changes visibility', function(){
            var menuIcon = document.body.querySelector("a.menu-icon-link");
            menuIcon.click();
            expect($("body").hasClass("menu-hidden")).toBe(false);
            menuIcon.click();
            expect($("body").hasClass("menu-hidden")).toBe(true);
          });

    /* Test suite named "Initial Entries" */

        /* This test suite ensures that when the loadFeed function is called
         * and completes its work, there is at least a single .entry element
         * within the .feed container. loadFeed() is asynchronous so this
         * test will require the use of Jasmine's beforeEach and asynchronous 
         * done() function.
         */
     describe('Initial Entries', function(){
        beforeEach(function(done) {
            loadFeed(1, done);
          });

        it("should have entries in feed container", function() {
            var feedContainer = document.querySelector('.feed');
            expect(feedContainer.children.length).toBeGreaterThan(0);
          });
     });

    /* Test suite named "New Feed Selection" */

        /* A test that ensures that when a new feed is loaded
         * by the loadFeed function, the content actually changes.
         */
    describe('New feed Selection', function(){
        var feed_1, feed_2;

        beforeEach(function(done){
            loadFeed(3, function(){
                feed_1 = document.querySelector('div.feed').innerHTML;
                loadFeed(2, function(){
                feed_2 = document.querySelector('div.feed').innerHTML;
                    done();
                });
            });
        });

        it('loads new feeds', function(){
            expect(feed_1).not.toBe(feed_2);
        });
    });     
}());
