
# welcomerigenera

Finestra di Benvenuto per Rigenera Digitale 18.04 LTS

In questo repo sono contenuti i sorgenti di Welcome Rigenera

<h2>Per cominciare</h2>

enrico@Parallels-Ubuntu18-04:~/Modelli/welcomerigenera$ pwd <br/>
/home/enrico/Modelli/welcomerigenera <br/>
<pre><font color="#8AE234"><b>enrico@Parallels-Ubuntu18-04</b></font>:<font color="#729FCF"><b>~/Modelli/welcomerigenera</b></font>$ ls -latr <br/>
totale 128
-rw-r--r--   1 enrico enrico  1448 apr 28 23:19 CONTRIBUTING.md
-rw-r--r--   1 enrico enrico  2292 apr 28 23:19 CODE_OF_CONDUCT.md
-rw-r--r--   1 enrico enrico    85 apr 28 23:19 ISSUE_TEMPLATE.md
drwxr-xr-x   7 enrico enrico  4096 apr 28 23:19 <font color="#729FCF"><b>main-process</b></font>
-rw-r--r--   1 enrico enrico  2425 apr 28 23:19 main.js
-rw-r--r--   1 enrico enrico  1073 apr 28 23:19 license.md
-rw-r--r--   1 enrico enrico  5854 apr 28 23:19 docs.md
-rw-r--r--   1 enrico enrico  2567 apr 28 23:19 auto-updater.js
drwxr-xr-x   7 enrico enrico  4096 apr 28 23:19 <font color="#729FCF"><b>assets</b></font>
drwxr-xr-x 488 enrico enrico 20480 apr 28 23:19 <font color="#729FCF"><b>node_modules</b></font>
drwxr-xr-x   2 enrico enrico  4096 apr 28 23:19 <font color="#729FCF"><b>script</b></font> <br/>
drwxr-xr-x   8 enrico enrico  4096 apr 28 23:19 <font color="#729FCF"><b>renderer-process</b></font>
-rw-r--r--   1 enrico enrico 16154 apr 28 23:19 package-lock.json
drwxr-xr-x   2 enrico enrico  4096 apr 28 23:19 <font color="#729FCF"><b>test</b></font>
-rw-r--r--   1 enrico enrico   140 apr 29 11:32 debian.json
drwxr-xr-x   4 enrico enrico  4096 apr 29 22:36 <font color="#729FCF"><b>..</b></font>
drwxr-xr-x   4 enrico enrico  4096 mag 19 11:59 <font color="#729FCF"><b>release-builds</b></font>
-rw-r--r--   1 enrico enrico   211 mag 19 12:23 README.md
drwxr-xr-x  12 enrico enrico  4096 mag 19 12:23 <font color="#729FCF"><b>.</b></font>
drwxr-xr-x   2 enrico enrico  4096 mag 19 12:24 <font color="#729FCF"><b>build-app</b></font>
-rw-r--r--   1 enrico enrico  2525 mag 20 07:29 package.json
drwxr-xr-x   8 enrico enrico  4096 mag 20 08:09 <font color="#729FCF"><b>.git</b></font>
-rw-r--r--   1 enrico enrico  2229 lug 29 07:58 index.html
drwxr-xr-x   3 enrico enrico  4096 lug 29 08:07 <font color="#729FCF"><b>sections</b></font>
</pre> <br/>

A questo punto puoi lanciare l'applicazione Welcome Rigenera dalla root del repo usando il comando: <br/>

<code>npm start</code> <br/>

mentre <br/>

<code>npm test</code> <br/>

lancia una batteria di test automatici demo ma funzionante. <br/>

<h2>Creazione del pacchetto .deb</h2>

Modifica nel file _package.json_ la chiave *version* per cambiare la versione dei pacchetti.<br>
Vai nella cartella build-app/ e cancella i pacchetti _.deb_ presenti.<br>
Torna nella root del repository e a seconda dell'architettura scelta lancia i comandi seguenti.<br>

<b>Release a 32 bit</b>
```
npm run build32
npm run deb32
```

<b>Release a 64 bit</b>
```
npm run build64
npm run deb64
```

<p>A questo punto torna nella cartella <b>build-app/</b> e verifica che sono stati creeati i pacchetti per l'architettura scelta. I file installabili contengono tutte le modifiche applicate in locale all'applicazione.</p>
