var TagActions = require require('../actions/tag_actions');

var TagUtil = {
  fetchTags: function(){
    $.ajax({
      url: 'api/taggings',
      success: function(tags){
        TaggingActions.receiveAllTaggings(taggings);
      }
    });
  },

  createTagging: function(tagging){
    $.ajax({
      url: 'api/taggings',
      dataType: 'json',
      type: 'POST',
      data: {tagging: tagging},
      success: function(tagging){
        TaggingActions.receiveSingleTagging(tagging);
      }
    });
  },
};

window.TaggingUtil = TaggingUtil;
module.exports = TaggingUtil;
