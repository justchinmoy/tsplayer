

		$(document).ready(function(){
			
				var video_path = "";
				var audio_path = "";
			
				$( "#submit-button1" ).click(function(){
					change_video(video_path);
					video_path = "";
				});
				
				$('#video-input1').change( function(event) {
					video_path = URL.createObjectURL(event.target.files[0]);
				});
				
				$( "#watch-video-button" ).click(function(){
					document.getElementById("vid1").pause();
					$( "#video-div" ).hide();
					document.getElementById("aud1").pause();
					$( "#audio-div" ).hide();
					$( "#submit-audio-div" ).hide();
					$( "#submit-video-div" ).show();
					$( "#status-div" ).hide();
					$('#video-input1').val("");
				});
				
				$( "#submit-button2" ).click(function(){
					change_audio(audio_path);
					audio_path = "";
				});
				
				$('#audio-input1').change( function(event) {
					audio_path = URL.createObjectURL(event.target.files[0]);
				});
				
				function change_mouse_to_pointer(selector){
					$(selector).css( "cursor", "pointer" );
				}
				
				function change_mouse_to_default(){
					$(selector).css( "cursor", "default" );
				}
				
				$( ":button" ).mouseover(function(){
					change_mouse_to_pointer(":button");
				});
				
				$( ":button" ).mouseout(function(){
					change_mouse_to_default(":button");
				});
				
				$( "#listen-audio-button" ).mouseover(function(){
					change_mouse_to_pointer("#listen-audio-button");
				});
				
				$( "#listen-audio-button" ).mouseout(function(){
					change_mouse_to_default("#listen-audio-button");
				});
				
				$( "#video-input1" ).mouseover(function(){
					change_mouse_to_pointer("#video-input1");
				});
				
				$( "#video-input1" ).mouseout(function(){
					change_mouse_to_default("#video-input1");
				});
				
				$( "#audio-input1" ).mouseover(function(){
					change_mouse_to_pointer("#audio-input1");
				});
				
				$( "#audio-input1" ).mouseout(function(){
					change_mouse_to_default("#audio-input1");
				});
				
				$( "#watch-video-button" ).mouseover(function(){
					change_mouse_to_pointer("#watch-video-button");
				});
				
				$( "#watch-video-button" ).mouseout(function(){
					change_mouse_to_default("#watch-video-button");
				});
				
				$( "#listen-audio-button" ).click(function(){
					document.getElementById("aud1").pause();
					$( "#audio-div" ).hide();
					document.getElementById("vid1").pause();
					$( "#video-div" ).hide();
					$( "#submit-video-div" ).hide();
					$( "#submit-audio-div" ).show();
					$( "#status-div" ).hide();
					$('#audio-input1').val("");
				});
				
				function change_video(video_path){
					if(video_path.length == 0){
						document.getElementById("vid1").pause();
						$( "#video-div" ).hide();
						$( "#status-div" ).html("Please choose a valid video file");
						$( "#status-div" ).show();
						return;
					}
					var video_var = document.getElementById("vid1");
					var sources = video_var.getElementsByTagName("source");
					sources[0].src = video_path;
					video_var.load();
					$( "#status-div" ).hide();
					$( "#video-input1" ).val("");
					$( "#video-div" ).show();
				}
				
				function change_audio(audio_path){
					if(audio_path.length == 0){
						document.getElementById("aud1").pause();
						$( "#audio-div" ).hide();
						$( "#status-div" ).html("Please choose a valid audio file");
						$( "#status-div" ).show();
						return;
					}
					var audio_var = document.getElementById("aud1");
					var sources = audio_var.getElementsByTagName("source");
					sources[0].src = audio_path;
					audio_var.load();
					$( "#status-div" ).hide();
					$( "#audio-input1" ).val("");
					$( "#audio-div" ).show();
				}
			});