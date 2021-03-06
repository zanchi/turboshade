precision mediump float;
 
// our texture
uniform sampler2D u_image;
uniform float u_time;
 
// the texCoords passed in from the vertex shader.
varying vec2 v_texCoord;
 
void main() {
   // Look up a color from the texture.
   // gl_FragColor = texture2D(u_image, v_texCoord);
   // gl_FragColor = vec4(0.3, 1.0, 0.6, 1.0);
   gl_FragColor = vec4(sin(u_time), sin(u_time), sin(u_time), 1.0);
}