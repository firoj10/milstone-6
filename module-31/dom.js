document.getElementById('apply-bg').addEventListener('click', function(){
 const friends = document.getElementsByClassName('friend');
 for (const friend  of friends  ){
friend.style.backgroundColor = 'lightblue';
 }

})
document.getElementById('centar-third').addEventListener('click', function(){
 const third = document.getElementById('third-friend');
 third.style.textAlign = 'center';

})
document.getElementById('add-friend').addEventListener('click', function(){
 const friendContainer = document.getElementById('friends');
 const friend = document.createElement('div');
 friend.classList.add('friend');
 friend.innerHTML = `
 <h3 class="friend-name">new Friend<h3>
 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel veniam dignissimos eaque.</p>

 `
 friendContainer.appendChild(friend);

})