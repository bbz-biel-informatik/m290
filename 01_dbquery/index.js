query("SELECT created_at, humidity, temperature FROM measurements WHERE sensor_id = 1", data => {
  console.log(data);        /* step=2 */
  var temperaturen = extract(data, 'temperature');    /* step=3 */
  console.log(temperaturen);                          /* step=3 */
});