/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
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


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         // Loops through each of the feed's (array) URLs to check that they are defined and are not empty
         it('has a URL defined and the URL is not empty', function() {
            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe(null);
            }    
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         // Loops through each of the feed's (array) names to check that they are defined and are not empty
         it('has a name defined and the name is not empty', function() {
            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe(null);
            }
         });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         // Checks that the body element has the 'menu-hidden' class
         it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

          // Checks that when the menu-icon-link class is clicked, the body element does not have the 'menu-hidden' class AKA is visible
          it('changes visibility when the menu icon is clicked', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
          });

          // Checks that when the menu-icon-link class is clicked again, the body element DOES have the 'menu-hidden' class AKA is not visible
          it('hides when clicked again', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Intial Entries', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

         // Loads the feed asynchronously 
         beforeEach(function(done) {
            loadFeed(0, done);
         });

         // Checks that at least one entry inside the feed container has content (greater than 0)
         it('at least one entry element within feed container', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
         });

    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function () {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

         // Created a variable for the oldFeed
         let oldFeed;

         // Everything in the function will load AFTER (similar to a setTimeOut) so that 'done' is called only once and finishes after everything loads
         beforeEach(function(done) {
            // loadFeed - Loads a web request and it puts in all the stuff into the feed class div
            loadFeed(0, function() {
                oldFeed = $('.feed').html();
                loadFeed(1, done);
            });

         });

         // Checks that the oldFeed has changed to show the new feed content
         it('loads new content when a new feed is loaded', function() {
            expect(oldFeed).not.toEqual($('.feed').html())
         });



    });
}());
