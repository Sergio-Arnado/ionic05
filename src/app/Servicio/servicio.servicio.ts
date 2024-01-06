import { Injectable } from '@angular/core';
import { Autor, Citas } from '../Modelo/citas';
import { Capacitor } from '@capacitor/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root'
})
export class ServicioServicio {

  


    private _cita:Citas [] = [
        new Citas("Citas")
      ]
    
      private _autor:Autor []=[
        new Autor("autor")
      ]
      
      sqlite:SQLiteConnection = new SQLiteConnection(CapacitorSQLite)
      db!: SQLiteDBConnection;
      plataforma: string = ""
    
      DB_NAME: string = "lista_citas";
      DB_ENCRIPTADA: boolean = true;
      DB_MODE: string= "no-encryption";
      DB_VERSION: number = 1;
      DB_READ_ONLY: boolean = false;
      TABLE_NAME: string = "lista_citas";
      COL_CITA: string = "";
      COL_AUTOR: string = "";
      DB_SQL_TABLAS: string = `
        CREATE TABLE IF NOT EXIST ${this.TABLE_NAME} (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          ${this.COL_CITA} TEXT NOT NULL,
          ${this.COL_AUTOR} TEXT NOT NULL);
        )
      `;
      
      
      constructor() { }
     
    
      private async _iniciarPluginWeb(): Promise<void> {    
        await customElements.whenDefined('jeep-sqlite')
        const jeepSqliteEl = document.querySelector("jeep-sqlite")
        if( jeepSqliteEl != null ) {      
          await this.sqlite.initWebStore()            
        }
    }
    
    async iniciarPlugin() {    
      this.plataforma = Capacitor.getPlatform()
      if(this.plataforma == "web") {
        await this._iniciarPluginWeb()
      }
      await this.abrirConexion()
      await this.db.execute(this.DB_SQL_TABLAS)    
      
      
    }
    
    async abrirConexion() {                    
      const ret = await this.sqlite.checkConnectionsConsistency() 
      const isConn = (await this.sqlite.isConnection(this.DB_NAME, this.DB_READ_ONLY)).result
      if(ret.result && isConn) {
        this.db = await this.sqlite.retrieveConnection(this.DB_NAME, this.DB_READ_ONLY)      
      } else {
        this.db = await this.sqlite.createConnection(
          this.DB_NAME,
          this.DB_ENCRIPTADA,
          this.DB_MODE,
          this.DB_VERSION,
          this.DB_READ_ONLY
        )
      }
    
      await this.db.open()
    
      
    
    
    }
    
      async agregarCita(c:Citas){
        const sql = `INSERT INTO ${this.TABLE_NAME} (${this.COL_CITA}) VALUES (?)`
        await this.db.run(sql, [c.Cita])
      }
    
      async getCita(): Promise<Citas[]> {
        const sql = `SELECT * FROM ${this.TABLE_NAME}`
        const resultado = await this.db.query(sql)
        return resultado?.values ??[]
      }
    
      agregarAutor(a:Autor){
        this._autor.push(a)
      }
    
      getAutor() :Autor[] {
        return this._autor
      }
      
    }
    