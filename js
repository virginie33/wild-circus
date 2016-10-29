<script> src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
           <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.3.min.js"><\/script>')</script>
           <script src="js/plugins.js"></script>
           <script src="js/main.js"></script>
       <script src="js/bootstrap.js"></script>
       </script>

   <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
         <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.3.min.js"><\/script>')</script>
         <script src="js/plugins.js"></script>
         <script src="js/main.js"></script>

         <script> src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
                    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.3.min.js"><\/script>')</script>
                    <script src="js/plugins.js"></script>
                    <script src="js/main.js"></script>
                <script src="js/bootstrap.js"></script>
                </script>

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
                  <script>window.jQuery ...</script>



<script>
                          $(function () {

                              var $container = $('#container').circus({
                                  itemSelector: '.item',
                                  columnWidth: 200
                              });

                              // reveal initial images
                              $container.masonryImagesReveal($('#images').find('.item'));
                          });

                          $.fn.masonryImagesReveal = function ($items) {
                              var msnry = this.data('circus');
                              var itemSelector = msnry.options.itemSelector;
                              // hide by default
                              $items.hide();
                              // append to container
                              this.append($items);
                              $items.imagesLoaded().progress(function (imgLoad, image) {
                                  // get item
                                  // image is imagesLoaded class, not <img>, <img> is image.img
                                  var $item = $(image.img).parents(itemSelector);
                                  // un-hide item
                                  $item.show();
                                  // masonry does its thing
                                  msnry.appended($item);
                              });

                              return this;


                   </script>

            <script>
               function displayPics()
{
  var photos = document.getElementById('galerie_mini') ;
  // On récupère l'élément ayant pour id galerie_mini
  var liens = photos.getElementsByTagName('a') ;
  // On récupère dans une variable tous les liens contenu dans galerie_mini
  var big_photo = document.getElementById('big_pict') ;
  // Ici c'est l'élément ayant pour id big_pict qui est récupéré, c'est notre photo en taille normale

  var titre_photo = document.getElementById('photo').getElementsByTagName('dt')[0] ;
  // Et enfin le titre de la photo de taille normale
  // Une boucle parcourant l'ensemble des liens contenu dans galerie_mini
  for (var i = 0 ; i < liens.length ; ++i) {
    // Au clique sur ces liens
    liens[i].onclick = function() {
      big_photo.src = this.href; // On change l'attribut src de l'image en le remplaçant par la valeur du lien
      big_photo.alt = this.title; // On change son titre
      titre_photo.firstChild.nodeValue = this.title; // On change le texte de titre de la photo
      return false; // Et pour finir on inhibe l'action réelle du lien
    };
  }
}

// Il ne reste plus qu'à appeler notre fonction au chargement de la page
window.onload = displayPics;

 </script>
myApp.directive('customButton', function () {
  return {
    link: function (scope, element, attrs) {
      // manipulation du DOM et événements
    }
  };
});

