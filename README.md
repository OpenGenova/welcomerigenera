
# welcomerigenera

BETA finestra di Benvenuto per Rigenera Digitale 18.04 LTS

In questo repo sono contenuti i sorgenti di Welcome Rigenera

Dentro alla cartella /build-app si trova il .deb che installa l'app

<h2>Per cominciare</h2>

enrico@Parallels-Ubuntu18-04:~/Modelli/welcomerigenera$ pwd <br/>
/home/enrico/Modelli/welcomerigenera <br/>
<pre><font color="#8AE234"><b>enrico@Parallels-Ubuntu18-04</b></font>:<font color="#729FCF"><b>~/Modelli/welcomerigenera</b></font>$ ls -latr <br/>
totale 128 <br/>
-rw-r--r--   1 enrico enrico  1448 apr 28 23:19 CONTRIBUTING.md <br/>
-rw-r--r--   1 enrico enrico  2292 apr 28 23:19 CODE_OF_CONDUCT.md <br/>
-rw-r--r--   1 enrico enrico    85 apr 28 23:19 ISSUE_TEMPLATE.md <br/>
drwxr-xr-x   7 enrico enrico  4096 apr 28 23:19 <font color="#729FCF"><b>main-process</b></font> <br/>
-rw-r--r--   1 enrico enrico  2425 apr 28 23:19 main.js <br/>
-rw-r--r--   1 enrico enrico  1073 apr 28 23:19 license.md <br/>
-rw-r--r--   1 enrico enrico  5854 apr 28 23:19 docs.md <br/>
-rw-r--r--   1 enrico enrico  2567 apr 28 23:19 auto-updater.js <br/>
drwxr-xr-x   7 enrico enrico  4096 apr 28 23:19 <font color="#729FCF"><b>assets</b></font> <br/>
drwxr-xr-x 488 enrico enrico 20480 apr 28 23:19 <font color="#729FCF"><b>node_modules</b></font> <br/>
drwxr-xr-x   2 enrico enrico  4096 apr 28 23:19 <font color="#729FCF"><b>script</b></font> <br/>
drwxr-xr-x   8 enrico enrico  4096 apr 28 23:19 <font color="#729FCF"><b>renderer-process</b></font> <br/>
-rw-r--r--   1 enrico enrico 16154 apr 28 23:19 package-lock.json <br/>
drwxr-xr-x   2 enrico enrico  4096 apr 28 23:19 <font color="#729FCF"><b>test</b></font> <br/>
-rw-r--r--   1 enrico enrico   140 apr 29 11:32 debian.json <br/>
drwxr-xr-x   4 enrico enrico  4096 apr 29 22:36 <font color="#729FCF"><b>..</b></font> <br/>
drwxr-xr-x   4 enrico enrico  4096 mag 19 11:59 <font color="#729FCF"><b>release-builds</b></font> <br/>
-rw-r--r--   1 enrico enrico   211 mag 19 12:23 README.md <br/>
drwxr-xr-x  12 enrico enrico  4096 mag 19 12:23 <font color="#729FCF"><b>.</b></font> <br/>
drwxr-xr-x   2 enrico enrico  4096 mag 19 12:24 <font color="#729FCF"><b>build-app</b></font> <br/>
-rw-r--r--   1 enrico enrico  2525 mag 20 07:29 package.json <br/>
drwxr-xr-x   8 enrico enrico  4096 mag 20 08:09 <font color="#729FCF"><b>.git</b></font> <br/>
-rw-r--r--   1 enrico enrico  2229 lug 29 07:58 index.html <br/>
drwxr-xr-x   3 enrico enrico  4096 lug 29 08:07 <font color="#729FCF"><b>sections</b></font> <br/>
</pre> <br/>

A questo punto puoi lanciare l'applicazione Welcome Rigenera dalla root del repo usando il comando: <br/>

<code>npm start</code> <br/>

mentre <br/>

<code>npm test</code> <br/>

lancia una batteria di test automatici demo ma funzionante. <br/>

<h2>Creazione del pacchetto .deb</h2>

Vai nella cartella welcomerigenera/build-app/ e cancella i pacchetti .deb presenti <br/>

<code>rm *</code><br/>

Torna nella root del repo e lancia i seguenti comandi:<br/>

```
electron-installer-debian --src release-builds/rigenera-app-linux-x64/ --arch amd64 --config debian.json
electron-installer-debian --src release-builds/rigenera-app-linux-ia32/ --arch i386 --config debian.json
```

<p>A questo punto torna nella cartella welcomerigenera/build-app/ e verifica che sono stati richeati i pacchetti per l'architettura a 32-64 bit. I file installabili contengono tutte le modifiche applicate in locale all'applicazione.</p>
