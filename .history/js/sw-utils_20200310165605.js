function actualizaCacheDinamico(dynamicCache,req,res){
    if(res.ok){
        return caches.open(dynamicCache).then(cache =>{
            cache.util(req,res.clone());
            return res.clone();
        })    
    }else{
        return res;
    }
}