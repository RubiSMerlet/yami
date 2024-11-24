import { MaterialIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Imagen principal (Bad Bunny) */}
        <Image
          source={require('./assets/BadBunny.jpg')} // Imagen local desde la carpeta assets
          style={styles.image}
        />

        {/* Información del usuario */}
        <View style={styles.userInfo}>
          <Image
            source={require('./assets/AvatardeUsuario.jpg')} // Avatar del usuario
            style={styles.avatar}
          />
          <View>
            <Text style={styles.username}>Luis Lovo</Text>
            <Text style={styles.time}>12 hours ago</Text>
          </View>
          <MaterialIcons name="notifications" size={24} color="#444" style={styles.notificationIcon} />
        </View>

        {/* Información del evento */}
        <View style={styles.content}>
          <Text style={styles.title}>Bad Bunny en El Salvador</Text>
          <Text style={styles.description}>
            La gira del artista puertorriqueño lo ha llevado a diferentes ciudades
            de Latinoamérica. Este sábado finalmente será el turno de nuestro
            país.
          </Text>
          <View style={styles.details}>
            <View style={styles.row}>
              <MaterialIcons name="location-on" size={20} color="#444" />
              <Text style={styles.detailText}>Estadio Cuscatlán</Text>
            </View>
            <View style={styles.row}>
              <MaterialIcons name="event" size={20} color="#444" />
              <Text style={styles.detailText}>Dom, 30 de Mar</Text>
            </View>
            <Text style={styles.tickets}>¡Tickets disponibles!</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo el espacio disponible
    justifyContent: "center", // Centra verticalmente
    alignItems: "center", // Centra horizontalmente
    backgroundColor: "#f4f4f8", // Fondo claro
    padding: 20, // Separación en los bordes
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    overflow: "hidden",
    width: "90%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
    fontSize: 14,
  },
  time: {
    fontSize: 12,
    color: "#666",
  },
  notificationIcon: {
    marginLeft: "auto",
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 15,
  },
  details: {
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  detailText: {
    marginLeft: 5,
    fontSize: 14,
    color: "#444",
  },
  tickets: {
    marginTop: 10,
    fontSize: 14,
    color: "#28a745",
    fontWeight: "bold",
  },
});


/* 
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
} */
