<!-- source: 206790af40f5 -->
# Perché esiste Privacy Ratings

Le guide sulla privacy aiutano milioni di persone a scegliere app e servizi migliori. Molte fanno un lavoro eccellente. Ma la maggior parte condivide gli stessi punti deboli:

- **Regole poco chiare.** Un servizio viene incluso o escluso, e il motivo è una discussione in un forum, una conversazione privata o non viene pubblicato affatto.
- **Solo promosso o bocciato.** Un elenco dice "consigliato" oppure non dice nulla. Non mostra quanto ci si sia andati vicino, né cosa cambierebbe il risultato.
- **Affermazioni senza verifiche.** Le descrizioni dicono "cifrato" o "nessun log" senza rimandare a nulla che un lettore possa verificare.
- **Nessun test.** I servizi ospitati vengono raramente controllati per la sicurezza di base, come le impostazioni TLS, gli header di sicurezza o l'autenticazione email.
- **Piattaforme separate.** Suggerimenti e discussioni avvengono su un forum o un server di chat che richiede un proprio account e una propria moderazione, separati dai contenuti veri e propri.
- **Lenti a cambiare.** Quando un prodotto cambia, gli elenchi restano spesso non aggiornati perché il loro aggiornamento dipende da poche persone.

Privacy Ratings è costruito per risolvere ciascuno di questi problemi.

## Dagli elenchi "awesome" a una risorsa curata

Molte di queste guide sono nate come elenchi su GitHub. Il formato degli elenchi "awesome", avviato da [Sindre Sorhus](https://github.com/sindresorhus/awesome), ha reso facile per chiunque pubblicare un elenco curato, e ne sono seguiti migliaia di elenchi awesome-qualcosa, molti dei quali fork l'uno dell'altro. Elenchi come [Awesome Privacy](https://github.com/lissy93/awesome-privacy) svolgono un lavoro prezioso, e molte voci presenti qui sono state inserite per la prima volta lì.

Il formato ha un punto debole: la maggior parte degli elenchi dipende da uno o due volontari. Quando un curatore se ne va, l'elenco si ferma, viene archiviato o si divide in fork che diventano ciascuno obsoleto. I lettori non possono capire quale copia sia aggiornata, e nulla in un elenco viene testato o valutato.

**Privacy Ratings è sostenuto e gestito da un'azienda, [Forward Email](https://forwardemail.net).** Non dipende da volontari che potrebbero andarsene o archiviare il repository. I dati sono strutturati anziché raccolti in un unico README, quindi possono essere convalidati, valutati e testati automaticamente ogni giorno. E poiché tutto è open source e con licenza CC BY-SA, la comunità può sempre copiarli, verificarli e migliorarli.

## Cosa cambia

**Ogni regola è pubblica.** Ogni categoria ha un breve elenco di domande con un peso da 1 a 3. Le domande, il significato di ogni risposta e il modo per verificarla si trovano tutti nella cartella [`criteria/`](criteria/). Consulta [i criteri](https://privacyratings.com/criteria/).

**Ogni risposta ha prove.** Un "sì" o un "parziale" deve rimandare a una fonte che chiunque possa verificare: documentazione, codice sorgente, un file di licenza o un report di audit. Tutto ciò che non ha prove conta come "sconosciuto" e vale zero. Una voce riceve un voto in lettere solo quando un numero sufficiente delle sue risposte è supportato da prove.

**Punteggi, non solo elenchi.** Ogni voce riceve un punteggio da 0 a 100, così i lettori possono vedere come si confrontano i servizi ed esattamente dove ciascuno è carente.

**Test di sicurezza automatici.** I servizi ospitati vengono testati a intervalli regolari con Qualys SSL Labs, Mozilla HTTP Observatory e Internet.nl (compreso il test email di Internet.nl per i provider email). I risultati vengono salvati nel repository e collegati da ogni pagina. Consulta [SCANS.md](SCANS.md).

**Giurisdizione alla luce del sole.** Ogni pagina mostra dove ha sede l'azienda, se quel paese fa parte dei Five, Nine o Fourteen Eyes, se si applica il GDPR e se il CLOUD Act statunitense la raggiunge. La giurisdizione viene indicata ma non valutata, perché ciò che un provider può consegnare dipende soprattutto da cosa conserva e da chi detiene le chiavi. Consulta [giurisdizioni](https://privacyratings.com/jurisdictions/) e [il CLOUD Act](https://privacyratings.com/cloud-act/).

**Tutto avviene su GitHub.** Suggerimenti e correzioni sono issue di GitHub. Le modifiche sono pull request. Le discussioni avvengono nelle GitHub Discussions. Non esistono forum, server di chat o sistemi di account separati. Ogni modifica a ogni valutazione ha una cronologia pubblica.

**Dati aperti.** Le valutazioni sono semplici file Markdown e YAML, e l'intero set di dati è pubblicato in JSON. I contenuti sono distribuiti con licenza CC BY-SA 4.0, quindi chiunque può riutilizzarli.

**Le scelte sono indicate come scelte.** I curatori selezionano una o due scelte per categoria e motivano ciascuna. Le scelte sono mostrate separatamente e non modificano mai i punteggi, così un lettore può sempre distinguere il giudizio editoriale dai risultati misurati.

## Chi lo gestisce

Privacy Ratings è sostenuto, finanziato e gestito da [Forward Email](https://forwardemail.net), un servizio email orientato alla privacy che è valutato anche qui. Questo garantisce la manutenzione del progetto nel lungo periodo, ma è anche un conflitto di interesse, quindi viene gestito in modo trasparente:

- Forward Email viene valutato con gli stessi criteri di ogni altro provider email.
- La sua voce riporta una dichiarazione, così come qualsiasi voce con un altro legame con i curatori.
- Le modifiche che alzano il punteggio di una voce affiliata devono rimandare a prove e restare aperte alla revisione pubblica prima dell'unione. Consulta [GOVERNANCE.md](GOVERNANCE.md).
- Non ci sono link di affiliazione, posizionamenti a pagamento o sponsorizzazioni. La validazione rifiuta i link con parametri di referral.

Se una valutazione sembra sbagliata, apri una issue o una pull request con le prove. Questo è tutto il processo.

## Ringraziamenti

Molte voci sono state inserite per la prima volta a partire da [Awesome Privacy](https://github.com/lissy93/awesome-privacy), pubblicato con licenza CC0. I dati sull'hosting dei server di posta provengono da [Awesome Mail Server Providers](https://github.com/forwardemail/awesome-mail-server-providers).
