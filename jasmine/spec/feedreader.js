/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* We're placing all of our tests within the $() function,
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* Test suite for the allFeeds variable in our application. */
  describe('RSS Feeds', function() {
    /* Test: allFeeds variable has
     * been defined and that it is not empty.
     */
    it('are defined and not empty', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).toBeGreaterThan(0);
    });

    /* Test: Feed objects in allFeeds variable
     * have a URL defined and that it is not empty.
     */
    it('have URLs associated to each feed and is not empty', function() {
      allFeeds.forEach(function(feed) {
        let url = feed.url;
        expect(url).toBeDefined();
        expect(url).toBeTruthy();
      });
    });

    /* Test: feed objects in allFeeds variable
     * have a name defined and that it is not empty.
     */
    it('have names defined for each feed and is not empty', function() {
      allFeeds.forEach(function(feed) {
        let name = feed.name;
        expect(name).toBeDefined();
        expect(name).toBeTruthy();
      });
    });
  });


  /* Test suite for off-canvas menu */
  describe('The menu', function() {
    /* Test: Menu element is hidden by default. */
    it('is hidden by default', function() {
      expect(document.body.classList.contains('menu-hidden')).toBe(true);
    });

    /* Test: Visibility is toggled for each click */
    it('toggles visibility when clicked', async function() {
      let menuIcon = document.querySelector('.menu-icon-link');
      menuIcon.click();
      expect(document.body.classList.contains('menu-hidden')).toBe(false);
      menuIcon.click();
      expect(document.body.classList.contains('menu-hidden')).toBe(true);
    });
  });

  /* Test suite for loaded entries after initial feed load */
  describe('Initial Entries', function() {
    /* Test: When the async function loadFeed() is called there is at least
     * a single .entry element within the .feed container.
     */

    beforeEach(function(done) {
      loadFeed(0, () => {
        done();
      });
    });

    it('contains at least one entry when loadFeed() has completed', function(done) {
      //expect($('.feed .entry').length).toBeGreaterThan(0);
      for (let i = 0; i < allFeeds.length; i++) {
        expect(document.querySelectorAll('.feed .entry').length).toBeGreaterThan(0);
        i += 1;

        loadFeed(i, () => {
          done();
        });
      }
    });
  });


  /* Test suite for loadFeed() function when new feeds are selected */
  describe('New Feed Selection', function() {
    /* Test: When the async function loadFeed() is called for selected feed,
     * content is updated
     */
    let newEntries, oldEntries;
    
    beforeEach(function(done) {
      loadFeed(0, () => {
        oldEntries = document.querySelector('.feed').innerHTML;

        loadFeed(1, () => {
          newEntries = document.querySelector('.feed').innerHTML;
          done();
        });
      });
    });

    it('updates content once loadFeed() has completed', function(done) {
      expect(oldEntries == newEntries).toBe(false);
      done();
    });
  });

}());
