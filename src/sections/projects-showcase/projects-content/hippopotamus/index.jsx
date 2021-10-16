import React from "react";

const Hippopotamus = () => (
	<div id="hippopotamus-project__content" className="p-4 space-y-4 text-justify">
		<h1 className="text-center text-2xl">Hippopotamus 💬</h1> 
		<p>Hippopotamus is the given name of a <b>Real-time chat </b>made with socketio.</p>

		<div>
			<p>The first thing you see when entering is the access page which allows you to set your username and the channel you want join to.</p>
			<p>This channel name is used for other people to enter in, like a facebook group!</p>
			<p>As simple and perfect as that.</p>
		</div>

		<p>The inputs are case sensitive and of course, every human in a channel has a unique username.</p>
		<img src="/static/images/sections/projects/hippopotamus/access.png" />

        <h2 className="pt-8 text-center mb-2">The chat itself</h2>
		<p>The chat uses socketio to make this purpose. The back-end is deployed on Heroku at: <a href="https://hippopotamus-server.herokuapp.com/" target="_blank" className="border border-black px-2 hover:bg-blue-100">https://hippopotamus-server.herokuapp.com/</a></p>
		<img src="/static/images/sections/projects/hippopotamus/cover.png" />

        <p>As you can see it has emojis which were easly implemented using React-emoji and also you can see who is in your channel</p>    
	</div>
);

export default Hippopotamus;