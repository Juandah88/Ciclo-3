<template>
    <div class="container">
        <h1>Comentarios</h1>

        <b-alert
            :show="dismissCountDown"
            dismissible
            :variant="mensaje.color"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged"
        >
            {{mensaje.texto}}
        </b-alert>

        <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name">

        <form @submit.prevent="editarComentario(comentarioEditar)" v-if="editar">
            <h3>Editar comentario</h3>
            
            <input type="text" class="form-control my-2" placeholder="Nombre" v-model="comentarioEditar.nombre">
            <input type="text" class="form-control my-2" placeholder="Comentario" v-model="comentarioEditar.comentario">
            <b-button class="btn-success my-2 mx-2" type="submit" >Editar</b-button>
            <b-button class="my-2" type="submit" @click="editar=false">Cancelar</b-button>
        </form>

        <form @submit.prevent="agregarComentario()" v-if="!editar">
            <h3>Agregar nuevo comentario</h3>
            
            <input type="text" class="form-control my-2" placeholder="Nombre" v-model="comentario.nombre">
            <input type="text" class="form-control my-2" placeholder="Comentario" v-model="comentario.comentario">
            <b-button class="btn-success my-2" type="submit" >Agregar</b-button>
        </form>


        <table class="table" id="myTable">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Comentario</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in comentarios" :key="index">
                    <th scope="row">{{item._id}}</th>
                    <td>{{item.nombre}}</td>
                    <td>{{item.comentario}}</td>
                    <td>{{item.date}}</td>
                    <td>
                        <b-button class="btn-warning btn-sm mx-2"
                        @click="activarEdicion(item._id)">Actualizar</b-button>
                        <b-button class="btn-danger btn-sm mx-2"
                        @click="eliminarComentario(item._id)">Eliminar</b-button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return{

            comentarios:[],
            mensaje: {color: 'success', texto: ''},
            dismissSecs: 5,
            dismissCountDown: 0,

            comentario:{nombre:"", comentario:""},
            editar: false,
            comentarioEditar:{}

        }
    },

    created() {

        this.listarComentarios();

    },

    methods: {

        listarComentarios() {
            this.axios.get('/comentario')
            .then ((response)=>{

                this.comentarios=response.data;

            })
            .catch((e)=>{

                console.log('error' + e);

            })
        },

        agregarComentario() {

            this.axios.post("comentario-nuevo", this.comentario)
            .then (response=>{

                this.comentarios.push(response.data)
                this.comentario.nombre = "";
                this.comentario.comentario = "";
                this.mensaje.color = "success";
                this.mensaje.texto = "Comentario agregado";
                this.showAlert();

            })
            .catch((e)=>{

                console.log('error' + e);

            }) 

        },


        eliminarComentario(id){

            this.axios.delete(`/comentario/${id}`)
            .then(response=>{

                const index = this.comentarios.findIndex(item => item._id === response.data._id)
                this.comentarios.splice(index, 1);
                this.mensaje.color = "success";
                this.mensaje.texto = "Comentario eliminado";
                this.showAlert();

            })
            .catch((e)=>{

                console.log('error' + e);

            })

        },

        activarEdicion(id){

            this.editar=true;
            this.axios.get(`/comentario/${id}`)
            .then(response=>{

                this.comentarioEditar = response.data;

            })
            .catch((e)=>{

                console.log('error' + e);

            })

        },

        editarComentario(item){

            this.axios.put(`/comentario/${item._id}`, item)
            .then(response=>{

                const index = this.comentarios.findIndex(n => n._id === response.data._id)
                this.comentarios[index].nombre = response.data.nombre
                this.comentarios[index].comentario = response.data.comentario
                this.mensaje.color = "success";
                this.mensaje.texto = "Comentario editado";
                this.showAlert(); 
                this.editar = false;

            })
            .catch((e)=>{

                console.log('error' + e);

            })

        },


        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },

        showAlert() {
            this.dismissCountDown = this.dismissSecs
        }

    },

    myFunction() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }       
        }
    }

};
</script>