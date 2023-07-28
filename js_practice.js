
// method -> obj

// function(search engine, node) -> gloval(window, global)


// 'this' refers to the new empty obj
function PlayVideo(title){
    this.title = title;
    console.log(this);
}

new PlayVideo('abc')


const video = {
    title : 'a',
    tags : ['a', 'b', 'c'],
    showTags(){
        this.tags.forEach(function(n){
            console.log(this, n)
        })
        },
    }

video.showTags()
