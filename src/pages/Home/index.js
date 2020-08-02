import React, { useEffect, useState } from 'react'
//import dadosIniciais from '../../data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain'
import Carrousel from '../../components/Carousel'
import PageDefault from '../../components/PageDefault'

import categoriasRepository from '../../repositories/categorias'
import Preloader from "../../components/Preloader"


function Home() {

  const [dadosIniciais, setDadosIniciais] =  useState([])



  useEffect( () =>{
    categoriasRepository.getAllWithVideos()
      .then( (categoriasComVideos) =>{
        setDadosIniciais(categoriasComVideos)
      })
      .catch((err)=>{
        console.log(err.message)
      })
  },[])


  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.length === 0 && (
        <div className="preloader">
            <Preloader size="200" alt="preloader image" title="Carregando..."/>
        </div>
      )}


      {dadosIniciais.map((categoria, indice) => {
        if(indice===0){
          return(
            <div key={categoria.id}>
                <BannerMain
                      videoTitle={dadosIniciais[0].videos[0].titulo}
                      url={dadosIniciais[0].videos[0].url}
                      videoDescription={"Onde só os clássicos têm vez!"}
                    />

                    <Carrousel
                      ignoreFirstVideo
                      category={dadosIniciais[0]}
                    />
            </div>
          )
        }
        return (
          <Carrousel
            key={categoria.id}          
            category={categoria}
          />          
        )
      })}
    </PageDefault>
  );
}

export default Home;
