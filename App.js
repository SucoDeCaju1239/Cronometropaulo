  import  React , {useState, useEffect } from 'react';
  import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

  const App = () => {
      const [temporizador, setTemporizador] = useState(0);
      const [status, setStatus] = useState(false);

      useEffect(() => {
        let interval;
        if (status == true) {
          interval = setInterval(() => {
            setTemporizador ((prev) => prev + 1);}, 1000); 
          }
        else {
          clearInterval()
        }

        return() => clearInterval(interval);
        }, [status]);

      const habilitar = () => {
        setStatus(!status);
      };

      const reset = () => {
        setTemporizador(0);
        setStatus(false);
      }


    const formatacao = () => {
      const minuto = Math.floor(temporizador / 60);
      const segundo = temporizador % 60;
      return minuto + ':' + segundos;

    }

    return(
      <View style={styles.corpo}>
      <Text style={styles.cronometro}>{formatacao(temporizador )}</Text>
      <View style={style.containerbotoes}>
      <TouchableOpacity style={style.botao} onPress={habilitar}>
      <Text style={styles.textobotao}>Zerar</Text>
      </TouchableOpacity>
      </View>
      </View>
    );
    );

    const style = StyleSheet.create({
      corpo: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center,
        backgroundColor:'FFFFFF'
      }
      cronometro: {
        fontSize: 43,
        fontWeight: 'Bold'
        
      }
    }
      }



  }