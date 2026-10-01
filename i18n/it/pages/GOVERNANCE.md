<!-- source: 63c0d07d1a26 -->
# Governance

Come vengono prese le decisioni, come vengono fatte le scelte e come vengono gestiti i conflitti di interesse.

## Curatori

I curatori revisionano e uniscono le pull request, smistano le issue e moderano le Discussions. I curatori sono elencati in [`.github/CODEOWNERS`](.github/CODEOWNERS). Chiunque può diventare curatore dopo aver dimostrato di fornire contributi accurati e ben documentati.

## Come vengono accettate le modifiche

1. Tutte le modifiche passano attraverso una pull request. Nessuno, curatori compresi, invia modifiche alle valutazioni direttamente su `main`.
2. Ogni pull request deve superare `npm test` (validazione e build).
3. Almeno un curatore approva la pull request.
4. Le risposte richiedono prove da una fonte primaria: documentazione ufficiale, codice sorgente, file di licenza, report di audit pubblicati o test riproducibili. Recensioni, post di blog e affermazioni pubblicitarie prive di dettagli non sono prove.
5. Quando le fonti sono in disaccordo, prevale la fonte primaria più recente. Se la situazione resta poco chiara, la risposta è "unknown".

## Modifiche ai criteri

I criteri determinano ogni punteggio, quindi le modifiche a `criteria/` richiedono più attenzione:

- Apri prima una issue "Criteria change" o una Discussion.
- La pull request resta aperta per almeno 7 giorni per i commenti pubblici.
- Richiede l'approvazione di due curatori.
- Gli id dei criteri non vengono mai rinominati dopo la pubblicazione. Per ritirare un criterio, rimuovilo con una pull request che ne spieghi il motivo.

## Scelte

- Ogni categoria può avere fino a due scelte.
- Una scelta deve avere un `pick_reason` che spieghi la decisione in linguaggio semplice.
- Ogni categoria ha al massimo due scelte, ordinate con `pick: 1` e `pick: 2`.
- Le scelte sono editoriali. Vengono mostrate separatamente e non modificano mai i punteggi.
- Chiunque può contestare una scelta nella categoria "Picks" delle Discussions. Alle contestazioni si risponde pubblicamente.

## Conflitti di interesse

Privacy Ratings è gestito dal team di Forward Email. Le voci collegate ai curatori sono "voci affiliate". Al momento si tratta di Forward Email.

Regole per le voci affiliate:

- Ogni voce affiliata riporta una `disclosure` mostrata in cima alla sua pagina.
- Una pull request che alza il punteggio di una voce affiliata, o la rende una scelta, deve collegare prove per ogni risposta modificata e restare aperta per almeno 7 giorni prima dell'unione.
- Una pull request che abbassa il punteggio di una voce affiliata con prove valide viene unita come qualsiasi altra.
- I curatori devono aggiungere una dichiarazione a qualsiasi voce con cui loro, o il loro datore di lavoro, hanno un legame finanziario o personale.

## Denaro

- Nessun link di affiliazione. La validazione rifiuta gli URL con parametri di referral o di tracciamento.
- Nessun posizionamento a pagamento, voce sponsorizzata o recensione a pagamento.
- I produttori possono inviare correzioni come chiunque altro, con prove, e devono dichiarare di essere il produttore.

## Moderazione

Issue, pull request e Discussions seguono il [Codice di condotta](CODE_OF_CONDUCT.md). I curatori possono bloccare o nascondere i commenti offensivi, fuori tema o promozionali.
