//youtube iframe
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
player = new YT.Player('player', {
  videoId: 'tpPPjtRzX2Q',
  playerVars: {'start': 30,'origin ':'Musical-Safari.github.com','vq':'hd720' },
  events: {
    'onReady': onPlayerReady,
    'onStateChange': onPlayerStateChange
  }
});
}



// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
event.target.playVideo();
event.target.setPlaybackQuality('hd720');
player.mute();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.

/*
-1 (unstarted)
0 (ended)
1 (playing)
2 (paused)
3 (buffering)
5 (video cued).


*/

function onPlayerStateChange(event) {
if (event.data == 1) {
    event.target.setPlaybackQuality('hd720');
}


if (event.data == 2) {
    player.playVideo();
}

if (event.data == 0) {
  player.playVideo();
}
}

//list style
var uList = document.getElementById("list")
var li = uList.getElementsByClassName("li");

for (var i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


//load video

var vid = document.getElementById('vid-src');

$('#city li').click(function(){
 var $this = $(this);

    switch ($this.text())
    {
        case 'Ahmedabad':
            player.loadVideoById('fnZn_UFm65M');
            vid.href = 'https://www.youtube.com/watch?v=fnZn_UFm65M';
            break;

        case 'Bangalore':
            player.loadVideoById('zkhpOpXnGIA');
            vid.href = 'https://www.youtube.com/watch?v=zkhpOpXnGIA';
            break;

        case 'Chandigarh':
            player.loadVideoById('QXwr8IKp4nk');
            vid.href = 'https://www.youtube.com/watch?v=QXwr8IKp4nk';         
            break;

        case 'Chennai':
            player.loadVideoById('lNhJVs1E25s');
            vid.href = 'https://www.youtube.com/watch?v=lNhJVs1E25s';         
            break;          

        case 'Dehradun':
            player.loadVideoById('s1HBAPpXPVc');
            vid.href = 'https://www.youtube.com/watch?v=s1HBAPpXPVc';         
            break;

        case 'Delhi':
            player.loadVideoById('irRnKsQPvtw');
            vid.href = 'https://www.youtube.com/watch?v=irRnKsQPvtw';         
            break;

        case 'Gandhinagar':
            player.loadVideoById('3lS_CmzdG8w');
            vid.href = 'https://www.youtube.com/watch?v=3lS_CmzdG8w';         
            break;

        case 'Greater Noida':
            player.loadVideoById('pvPEKL5Z1ZM');
            vid.href = 'https://www.youtube.com/watch?v=pvPEKL5Z1ZM';         
            break;

        case 'Gurgaon':
            player.loadVideoById('rl6kAO0DgYs');
            vid.href = 'https://www.youtube.com/watch?v=rl6kAO0DgYs';         
            break;

        case 'Hyderabad':
            player.loadVideoById('ngM2gWR7W84');
            vid.href = 'https://www.youtube.com/watch?v=ngM2gWR7W84';         
            break;

        case 'Indore':
            player.loadVideoById('vUxNm4lasdA'); 
            vid.href = 'https://www.youtube.com/watch?v=vUxNm4lasdA';        
            break;

        case 'Jaipur':
            player.loadVideoById('LtEzCbY1AC4');
            vid.href = 'https://www.youtube.com/watch?v=LtEzCbY1AC4';         
            break;

        case 'Kolkata':
            player.loadVideoById('QfSwNR8IMm0');
            vid.href = 'https://www.youtube.com/watch?v=QfSwNR8IMm0';         
            break;

        case 'Mumbai':
            player.loadVideoById('4hUQrosIR00');
            vid.href = 'https://www.youtube.com/watch?v=4hUQrosIR00';         
            break;

        case 'Mumbai Sealink':
            player.loadVideoById('-m-mpxyJNKM');
            vid.href = 'https://www.youtube.com/watch?v=-m-mpxyJNKM';         
            break;

        case 'Mysore':
            player.loadVideoById('8WepuA_Gi34');
            vid.href = 'https://www.youtube.com/watch?v=8WepuA_Gi34';         
            break;

        case 'Pune':
            player.loadVideoById('6ajtp-HzNbs');
            vid.href = 'https://www.youtube.com/watch?v=6ajtp-HzNbs';         
            break;

        case 'Shimla':
            player.loadVideoById('walUViMjZhQ');
            vid.href = 'https://www.youtube.com/watch?v=walUViMjZhQ';         
            break;

        case 'Sikkim':
            player.loadVideoById('h-jKUudLTFE');
            vid.href = 'https://www.youtube.com/watch?v=h-jKUudLTFE';         
            break;

        case 'Surat':
            player.loadVideoById('CwwnU9o0c1Q');
            vid.href = 'https://www.youtube.com/watch?v=CwwnU9o0c1Q';         
            break;

        case 'Vadodara':
            player.loadVideoById('xyNrOfE3GAQ');
            vid.href = 'https://www.youtube.com/watch?v=xyNrOfE3GAQ';         
            break;

        case 'Chicago':
            player.loadVideoById('kOMWAnxKq58');
            vid.href = 'https://www.youtube.com/watch?v=kOMWAnxKq58';         
            break;

        case 'New York City':
            player.loadVideoById('7HaJArMDKgI');
            vid.href = 'https://www.youtube.com/watch?v=7HaJArMDKgI';         
            break;

        case 'Las Vegas':
            player.loadVideoById('DL703lh_my8');
            vid.href = 'https://www.youtube.com/watch?v=DL703lh_my8';         
            break;

        case 'Los Angeles':
            player.loadVideoById('4zcgCx2MjMQ');
            vid.href = 'https://www.youtube.com/watch?v=4zcgCx2MjMQ';         
            break;

        case 'San Francisco':
            player.loadVideoById('PGMu_Z89Ao8');
            vid.href = 'https://www.youtube.com/watch?v=PGMu_Z89Ao8';         
            break;

        case 'Atlanta':
            player.loadVideoById('K6j9ktMBNBA');
            vid.href = 'https://www.youtube.com/watch?v=K6j9ktMBNBA';         
            break;

        case 'Boston':
            player.loadVideoById('Ho3yyyqinTU');
            vid.href = 'https://www.youtube.com/watch?v=Ho3yyyqinTU';         
            break;

        case 'Columbia':
            player.loadVideoById('hzfLbwTYOe0');
            vid.href = 'https://www.youtube.com/watch?v=hzfLbwTYOe0';         
            break;

        case 'Dallas':
            player.loadVideoById('i8uW798lBCE');
            vid.href = 'https://www.youtube.com/watch?v=i8uW798lBCE';         
            break;
                    
         
        case 'HollyWood':
            player.loadVideoById('S-KdqA_6DII');
            vid.href = 'https://www.youtube.com/watch?v=S-KdqA_6DII';         
            break;
        
        case 'London':
            player.loadVideoById('QI4_dGvZ5yE');
            vid.href = 'https://www.youtube.com/watch?v=QI4_dGvZ5yE';         
            break;  
        
        case 'Manchester':
            player.loadVideoById('iKoiVAyEopk');
            vid.href = 'https://www.youtube.com/watch?v=iKoiVAyEopk';         
            break; 
        
        case 'Birmingham':
            player.loadVideoById('A5W6lLMjIYU');
            vid.href = 'https://www.youtube.com/watch?v=A5W6lLMjIYU';         
            break;
        
        case 'Liverpool':
            player.loadVideoById('SC96PHhN2PA');
            vid.href = 'https://www.youtube.com/watch?v=SC96PHhN2PA';         
            break;
        
        case 'Dubai':
            player.loadVideoById('ls_QOHIjvoU');
            vid.href = 'https://www.youtube.com/watch?v=ls_QOHIjvoU';         
            break;
        
        case 'Abu Dhabi':
            player.loadVideoById('5YgwIOfMg3k');
            vid.href = 'https://www.youtube.com/watch?v=5YgwIOfMg3k';         
            break;
        
        case 'Sharjah':
            player.loadVideoById('NGDHYScXwUQ');
            vid.href = 'https://www.youtube.com/watch?v=NGDHYScXwUQ';         
            break;
        
        case 'Toronto':
            player.loadVideoById('50Uf_T12OGY');
            vid.href = 'https://www.youtube.com/watch?v=50Uf_T12OGY';         
            break;

        case 'Vancouver':
            player.loadVideoById('6tyFAtgy4JA');
            vid.href = 'https://www.youtube.com/watch?v=6tyFAtgy4JA';         
            break;

        case 'Montreal':
            player.loadVideoById('tpPPjtRzX2Q');
            vid.href = 'https://www.youtube.com/watch?v=tpPPjtRzX2Q';         
            break;
    }
})


//radio
var song = document.querySelector('#song'); // audio object

var songTitle = document.querySelector('.song-title'); // element where track title appears
let pPause = document.querySelector('#play-pause'); // element where play and pause image appears

songIndex = 0;
songs = ['https://sg1.fastcast4u.com/proxy/dzcwbfih?mp=/1',
            'http://64.71.79.181:5124/stream?1505228937567.mp3',
            'http://stream.zenolive.com/rqqps6cbe3quv',
            'https://onlineradiofm.in/apii.php?url=https://radioindia.net/radio/vividhbharti/icecast.audio',
            'https://onlineradiofm.in/apii.php?url=https://radioindia.net/radio/mirchi98/icecast.audio',
            'https://stream.zeno.fm/szh14bya1feuv',            
            'http://prclive1.listenon.in:9960/',
            'https://playerservices.streamtheworld.com/api/livestream-redirect/ARRAHMANRADIO_S01.aac?dist=onlineradiobox',
            'http://103.16.47.70:9222/;stream.nsv',
            'http://103.16.47.70:8444/;stream.nsv',
            'http://103.16.47.70:8555/;stream.nsv',
            'http://103.16.47.70:8666/;stream.nsv']; // object storing paths for audio objects

songTitles = ["Big FM",
                "Retro Bollywood",
                "Hits Of Bollywood",
                "Vividh Bharati",
                "Radio Mirchi",
                "Punjabi Radio",                
                "Radio City Hindi",
                "A.R. Rahman Hits",
                "Dance Masti",
                "International Hits-1",
                "International Hits-2",
                "Best Of EDM"]; // object storing track titles

// function where pp (play-pause) element changes based on playing boolean value - if play button clicked, change pp.src to pause button and call song.play() and vice versa.
let playing = true;

function playPause() {
    if (playing) {
        song = document.querySelector('#song'),
        pPause.src = "Image/pause.png"
        song.play();
        playing = false;    
    } else {
        pPause.src = "Image/play.png"    
        song.pause();
        playing = true;
    }
}


// function where songIndex is incremented, song/thumbnail image/background image/song artist/song title changes to next index value, and playPause() runs to play next track 
function nextSong() {
    songIndex++;
    if (songIndex > 11) {
        songIndex = 0;
    };
    song.src = songs[songIndex];
    songTitle.innerHTML = songTitles[songIndex];

    playing = true;
    playPause();
}

// function where songIndex is decremented, song/thumbnail image/background image/song artist/song title changes to previous index value, and playPause() runs to play previous track 
function previousSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = 11;
    };
    song.src = songs[songIndex];
    songTitle.innerHTML = songTitles[songIndex];

    playing = true;
    playPause();
}


var show = true;
$('.fa-eye').click(function(){
    if (show)
    {
        document.getElementById("box").style.visibility = "hidden";
        document.getElementById("noise").style.visibility = "hidden";
        document.getElementById("list").style.visibility = "hidden";
        show = false;
    }
    else
    {
        document.getElementById("box").style.visibility = "visible";
        document.getElementById("noise").style.visibility = "visible";
        document.getElementById("list").style.visibility = "visible";
        show = true;
    }
})

var mute = true;
var toggle = document.getElementById('toggle');
function noise()
{
    player.unMute();
    if(mute)
    {
        player.unMute();
        mute = false;
        toggle.innerHTML = 'Street Noise : On'
    }
    else 
    {
        player.mute();
        mute = true;
        toggle.innerHTML = 'Street Noise : Off'
    }
}
