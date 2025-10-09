// Metodos de propiedad 

const player = {
    play : function(id){
        console.log("playing song...", id );
    },

    pause : function(id2){
        console.log(`Paused..., ${id2}`);
    },
    delete : function(id3){
        console.log(`Delete..., ${id3}`);
    },
    CreateNewpPlaylist : function(id4){{
        console.log(`CreateNewpPlaylist..., ${id4}`);
    }}
}

console.log(player);
player.play(217);
player.pause(217);
player.delete(217);
player.CreateNewpPlaylist(217);