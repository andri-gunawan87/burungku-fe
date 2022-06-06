<template>
<v-data-table
    :headers="headers"
    :items="listBanner"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>List Banner</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              Tambah Banner
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                    <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                    <v-file-input
                        show-size
                        counter
                        multiple
                        v-model="editedItem.image"
                        label="File input"
                    ></v-file-input>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="12"
                  >
                    <v-text-field
                      v-model="editedItem.nama"
                      label="Nama Banner"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="12"
                  >
                    <v-textarea
                        clearable
                        clear-icon="mdi-close-circle"
                        label="Deskripsi"
                        value="Deskripsi gambar"
                        v-model="editedItem.deskripsi"
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Batal
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Simpan
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Apa anda yakin untuk menghapusnya?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Batal</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">Hapus</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
    layout: "AdminLayout",
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Gambar Banner',
          align: 'start',
          sortable: false,
          value: 'image',
        },
        { text: 'Nama Banner', value: 'nama' },
        { text: 'Deskripsi', value: 'deskripsi' },
        { text: 'Tanggal Pembuatan', value: 'tgl_pembuatan' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      listBanner: [],
      editedIndex: -1,
      editedItem: {
        image: '',
        nama: '',    
        deskripsi: '',
      },
      defaultItem: {
        image: '',
        nama: '',    
        deskripsi: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Tambah Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      async initialize () {
        // const response = await this.$axios.get("/admin/banner");
        // this.listAllBanner = response.data;
    this.listBanner = [
            {
                image: 'no image',
                nama: 'bannerku',
                deskripsi: 'ini deskripsi loh',
                tgl_pembuatan: 'coba tebak tgl berapa banner ini dibuat',
            },
        ]
      },

      editItem (item) {
        this.editedIndex = this.listBanner.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.listBanner.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.listBanner.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.listBanner[this.editedIndex], this.editedItem)
        } else {
          this.listBanner.push(this.editedItem)
        }
        this.close()
      },
    },
}
</script>
