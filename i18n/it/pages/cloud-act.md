<!-- source: 2f40b8f7e8ef -->
# Che cos'è il CLOUD Act?

Il **Clarifying Lawful Overseas Use of Data Act (CLOUD Act)** è una legge statunitense che risponde a una domanda: le autorità statunitensi possono ottenere dati da un'azienda statunitense quando tali dati sono archiviati in un altro paese? La risposta è sì.

## Cosa fa

1. **La posizione non conta.** Un provider soggetto alla giurisdizione statunitense deve consegnare i dati in suo "possesso, custodia o controllo" in risposta a un valido procedimento legale statunitense, ovunque nel mondo siano archiviati i dati. [Fonte: Dipartimento di Giustizia degli Stati Uniti](https://www.justice.gov/criminal/cloud-act-resources)
2. **Accordi con altri paesi.** Gli Stati Uniti possono firmare accordi di accesso ai dati che consentono a governi stranieri fidati di richiedere dati direttamente ai provider statunitensi per reati gravi, senza passare per la più lenta procedura dei trattati di mutua assistenza giudiziaria (MLAT). [Fonte: Dipartimento di Giustizia degli Stati Uniti](https://www.justice.gov/criminal/cloud-act-resources)
3. **Un modo per opporsi.** I provider possono chiedere a un tribunale di annullare o modificare una richiesta quando è in conflitto con le leggi di un altro paese con cui è in vigore un accordo.

Sono in vigore accordi con il **Regno Unito** e l'**Australia**. Sono stati annunciati negoziati con il **Canada** e l'**Unione Europea**. [Fonte: Dipartimento di Giustizia degli Stati Uniti](https://www.justice.gov/archives/opa/pr/landmark-us-uk-data-access-agreement-enters-force)

## Cosa non fa

- Non crea nuovi poteri di sorveglianza né elimina la necessità di un mandato. Le autorità statunitensi hanno comunque bisogno di un valido procedimento legale, e per il contenuto delle comunicazioni serve in genere un mandato di perquisizione.
- Non obbliga un provider a decifrare dati che non è in grado di decifrare. Riguarda i dati che il provider possiede. I dati cifrati con chiavi che solo l'utente possiede restano cifrati.
- Non si applica solo ai data center statunitensi. Scegliere un server in Europa non aiuta se l'azienda che lo gestisce è soggetta alla giurisdizione statunitense.

## Chi riguarda

Ogni azienda soggetta alla giurisdizione statunitense: Google, Microsoft, Apple, Amazon, Cloudflare e servizi statunitensi più piccoli, compreso Forward Email. Consulta [tutti i servizi valutati con sede negli Stati Uniti](/jurisdictions/united-states/).

Può raggiungere anche **servizi non statunitensi che archiviano dati presso provider cloud statunitensi**, poiché il provider cloud stesso può ricevere una richiesta. Per questo la domanda utile non è solo "dove si trova l'azienda?" ma anche "quali dati esistono e chi detiene le chiavi?"

## Perché la crittografia e la minimizzazione dei dati contano più della posizione

Le leggi cambiano, e ogni paese ha un modo per ottenere dati in modo coercitivo. Ciò che conta di più è cosa un provider **può** consegnare:

| Situazione | Cosa può raggiungere una richiesta |
| --- | --- |
| Posta archiviata in chiaro | Tutto il contenuto della casella |
| Posta cifrata a riposo con chiavi in possesso del provider | Tutto, perché il provider può decifrarla |
| Posta cifrata con chiavi derivate dalla password dell'utente | Dati dell'account e dati di connessione, non il contenuto dei messaggi |
| Nessun log conservato | Nulla sull'attività |

Esempi reali:

- **Proton (Svizzera, fuori da tutti gli accordi Eyes)** ha ottemperato a 8.313 dei 9.301 ordini legali svizzeri nel suo report annuale più recente, fornendo le informazioni sugli account in suo possesso. [Fonte: report sulla trasparenza di Proton](https://proton.me/legal/transparency)
- **Proton VPN (stessa azienda, stesso paese)** non ha ottemperato a nessuno, perché non conserva log. [Fonte: report sulla trasparenza di Proton](https://proton.me/legal/transparency)
- **Tuta (Germania)** può ricevere da un giudice tedesco l'ordine di consegnare caselle di posta o di monitorarle in tempo reale. La posta cifrata end-to-end resta cifrata. [Fonte: report sulla trasparenza di Tuta](https://tuta.com/blog/transparency-report)

La stessa azienda nello stesso paese ottiene risultati molto diversi a seconda dei dati che esistono. Per questo Privacy Ratings indica la giurisdizione su ogni pagina ma valuta ciò che i provider fanno davvero. Consulta [come viene gestita la giurisdizione](/jurisdictions/).

## Come si applica il CLOUD Act a Forward Email

Forward Email ha sede negli Stati Uniti ed è soggetto al CLOUD Act. Il suo [whitepaper tecnico](https://forwardemail.net/technical-whitepaper.pdf) descrive come la sua progettazione limita ciò che una richiesta potrebbe raggiungere:

- **Caselle di posta cifrate.** Ogni casella di posta è un file SQLite cifrato singolarmente. Il whitepaper afferma che Forward Email non può accedere al contenuto dei messaggi.
- **Nessuna registrazione su disco del contenuto o dei metadati delle email.** Forward Email non conserva registrazioni di chi siano i destinatari degli utenti.
- **Dati limitati.** Ciò che potrebbe essere divulgato sono le informazioni di base dell'account (come l'indirizzo email dell'account, la data di registrazione e i dati di pagamento) e log limitati degli indirizzi IP che possono essere conservati temporaneamente per sicurezza e prevenzione degli abusi.
- **Solo procedimenti legali validi.** Le richieste necessitano di un subpoena, di un ordine del tribunale o di un mandato di perquisizione. Le richieste provenienti dall'esterno degli Stati Uniti devono passare attraverso un tribunale statunitense, un trattato di mutua assistenza giudiziaria o un accordo CLOUD Act che soddisfi i requisiti legali statunitensi.
- **Notifica e contestazioni.** Gli utenti vengono informati quando la legge lo consente, e le richieste eccessivamente ampie vengono contestate.

Forward Email gestisce Privacy Ratings. La sua valutazione usa gli stessi criteri di ogni altro provider. Consulta [la valutazione di Forward Email](/email-providers/forward-email/) e [le regole di governance](/governance/).

## Approfondimenti

- [Dipartimento di Giustizia degli Stati Uniti: risorse sul CLOUD Act](https://www.justice.gov/criminal/cloud-act-resources)
- [Congressional Research Service: condivisione transfrontaliera dei dati ai sensi del CLOUD Act](https://www.congress.gov/crs-product/R45173)
- [EFF: sorveglianza ai sensi della Section 702](https://www.eff.org/702-spying)
- [EFF: National Security Letter](https://www.eff.org/issues/national-security-letters)
