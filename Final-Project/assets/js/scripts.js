$(document).ready(function() {
  
    var scrolling = false,
        curPage = 1,
        pages = 4,

        $painpoints = $(".painpoints");
        
    
    function doContents(paramPage) {
      
      scrolling = true;
      
      var page = paramPage || curPage;
      
      $painpoints.each(function() {
        $(".painpoints li").removeClass("active");
        $(".painpoints li[data-page="+ page +"]").addClass("active");
        curPage = page;
      });

     
      
      setTimeout(function() {
        scrolling = false;
      }, 1000);
    }
    
    function navigateUp() {
      if (curPage > 1) {
        curPage--;
        pagination(curPage);
        doContents();
      }
    }
    
    function navigateDown() {
      if (curPage < pages) {
        curPage++;
        pagination(curPage);
        doContents();
      }
    }
    
    function pagination(page) {
      $(".page-dots li").removeClass("active");
      $(".page-dots li[data-page="+ page +"]").addClass("active");
      $(".page-names li").removeClass("active");
      $(".page-names li[data-page="+page+"]").addClass("active");
      curPage = page;
    }
    
    $(document).on("click", ".page-dots li", function() {
      if (!scrolling) {
        var page = parseInt($(this).attr("data-page"), 10);
        pagination(page);
        doMargins(page);
      }
    });
    
  
    
    function initHandlers() {
      
      $(document).on("mousewheel DOMMouseScroll", function(e) {
        if (!scrolling) {
          if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            navigateUp();
          } else { 
            navigateDown();
          }
        }
      });
  
 
      
    }
    
    initHandlers();
    
   
  }); 