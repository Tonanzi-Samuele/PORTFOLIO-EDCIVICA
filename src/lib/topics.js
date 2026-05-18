import { base } from '$app/paths';

export const anni = [
  {
    anno: '3ª Superiore',
    periodo: '2023/24',
    id: 'terza',
    materie: [
      {
        materia: 'Italiano',
        progetti: [
          {
            id: 'mattanza',
            titolo: 'La Mattanza',
            tipo: 'Libro — Carlo Lucarelli',
            descrizione:
              'Il libro "La Mattanza" di Carlo Lucarelli ripercorre la storia di Cosa Nostra dagli anni Settanta fino ai giorni nostri: dal processo di Bari del 1969 che ruppe per la prima volta il silenzio sulla mafia, passando per le figure di Riina, Bagarella e Provenzano, la guerra dei Corleonesi, le morti di Dalla Chiesa, Falcone e Borsellino, fino al maxiprocesso e alle stragi di Capaci e via D\'Amelio. Lucarelli racconta tutto con lo stile coinvolgente del romanzo noir, ma i fatti sono reali.',
            foto: [`${base}/mattanza.jpg`],
            link: []
          }
        ]
      },
      {
        materia: 'Informatica',
        progetti: [
          {
            id: 'codice-fiscale',
            titolo: 'Codice Fiscale',
            tipo: 'Progetto in C',
            descrizione:
              "Il progetto consiste in un programma scritto in linguaggio C che genera automaticamente il codice fiscale a partire dai dati anagrafici inseriti dall'utente: nome, cognome, data di nascita, sesso e comune di nascita. Il programma applica tutte le regole ufficiali di calcolo — estrazione delle consonanti e vocali per nome e cognome, codifica della data e del sesso, ricerca del codice catastale del comune — fino al calcolo del carattere di controllo finale. Sviluppato individualmente, mi ha permesso di applicare concetti fondamentali della programmazione in C come stringhe, array, funzioni e logica condizionale.",
            foto: [`${base}/COD.png`],
            link: [
              {
                testo: 'VAI ALLA PRESENTAZIONE',
                url: 'https://docs.google.com/presentation/d/1Us90et38k3cCf6-6eAT3h5bcXPkNgxhTDCMECTJLtaM/edit?usp=sharing'
              },
              {
                testo: 'GITHUB',
                url: 'https://github.com/Tonanzi-Samuele/codice_fiscale'
              }
            ]
          }
        ]
      },
      {
        materia: 'Storia',
        progetti: [
          {
            id: 'mafie',
            titolo: "La 'Ndrangheta",
            tipo: 'Presentazione PowerPoint',
            descrizione:
              "Presentazione realizzata in gruppo sulla 'Ndrangheta, una delle organizzazioni criminali più potenti al mondo. Abbiamo analizzato le origini dell'organizzazione in Calabria, la sua struttura interna basata sui clan familiari, i principali traffici illeciti — droga, armi, estorsioni — e il suo radicamento nel territorio nazionale e internazionale. Il lavoro ci ha permesso di approfondire un fenomeno criminale spesso sottovalutato rispetto ad altre mafie, ma che oggi rappresenta una delle organizzazioni criminali con il maggior giro d'affari a livello globale.",
            foto: [`${base}/ndrangheta.png`],
            link: [
              {
                testo: 'PRESENTAZIONE',
                url: 'https://canva.link/0c9ag610no3mww1'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    anno: '4ª Superiore',
    periodo: '2024/25',
    id: 'quarta',
    materie: [
      {
        materia: 'Storia',
        progetti: [
          {
            id: 'amish',
            titolo: 'Gli Amish',
            tipo: 'Presentazione PowerPoint',
            descrizione:
              'Presentazione realizzata in gruppo sulla cultura Amish, una comunità religiosa cristiana di origine svizzero-tedesca diffusa principalmente negli Stati Uniti e in Canada. Abbiamo esplorato il loro stile di vita basato sul rifiuto della tecnologia moderna, l\'importanza della comunità e della famiglia, le tradizioni religiose e il concetto di "Rumspringa" — il periodo in cui i giovani possono scegliere se restare nella comunità o integrarsi nella società moderna. Un approfondimento su come sia possibile vivere in modo radicalmente diverso rispetto alla società contemporanea, mantenendo valori e tradizioni tramandate da secoli.',
            foto: [`${base}/amish.png`],
            link: [
              {
                testo: 'VAI ALLA PRESENTAZIONE',
                url: 'https://docs.google.com/presentation/d/1NXaojzMIjfVXJlawmFspJkkZMN6Wlf4NffAA7Az1_eE/edit?usp=sharing'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    anno: '5ª Superiore',
    periodo: '2025/26',
    id: 'quinta',
    materie: [
      {
        materia: 'Informatica',
        progetti: [
          {
            id: '1522',
            titolo: 'Progetto 1522',
            tipo: 'Progetto in Django',
            descrizione:
              "Il progetto è una riproduzione funzionale della piattaforma ufficiale 1522 — il servizio antiviolenza e antistalking del Dipartimento per le Pari Opportunità — realizzata individualmente in Django. L'obiettivo era simulare il funzionamento del sistema reale: un'interfaccia attraverso cui le vittime di violenza possono inviare segnalazioni in modo sicuro e discreto. Il progetto include la gestione del database, le viste, i form e l'autenticazione, ed è stato sviluppato come approfondimento pratico del tema della violenza di genere affrontato in classe.",
            foto: [`${base}/1522.png`],
            link: [
              {
                testo: 'GITHUB',
                url: 'https://github.com/Tonanzi-Samuele/1522'
              }
            ]
          }
        ]
      },
      {
        materia: 'Italiano',
        progetti: [
          {
            id: 'prigione-domestica',
            titolo: 'La Prigione Domestica',
            tipo: 'Analisi & Ricerca',
            descrizione:
              "Il progetto 'La Prigione Domestica: Dati, Psicologia e Diritto' è stato svolto in coppia e si è articolato in tre moduli. Nel primo abbiamo analizzato i dati Istat ed Eurostat sulla violenza domestica in Italia e in Europa, costruendo un glossario dei termini chiave come violenza psicologica, violenza assistita, ciclo della violenza e gaslighting. Nel secondo modulo abbiamo approfondito la risposta dello Stato: il Codice Rosso, il numero 1522 e il 'Signal for Help', il gesto con la mano nato per chiedere aiuto discretamente in videochiamata. Nel terzo modulo, in quanto classe di informatica, abbiamo progettato una proposta tecnologica: un'applicazione pensata per permettere alle vittime di chiedere aiuto in modo discreto, raccogliere prove digitali in sicurezza e accedere in modo anonimo a risorse legali e psicologiche. Il lavoro ci ha permesso di collegare competenze tecniche a un tema sociale urgente.",
            foto: [`${base}/prig.png`],
            link: []
          },
          {
            id: 'saviano',
            titolo: 'Incontro con Roberto Saviano',
            tipo: 'Evento',
            descrizione:
              'Abbiamo incontrato Roberto Saviano, scrittore e giornalista da anni sotto scorta per aver denunciato pubblicamente la camorra. Durante l\'incontro ci ha parlato di come la mafia riesca a infiltrarsi e controllare settori fondamentali della società — economia, politica, istituzioni — spesso in modo invisibile. Ci ha raccontato la sua esperienza personale, il prezzo che ha pagato per la sua scelta di non tacere, e ci ha presentato il suo ultimo libro. Un incontro che ha fatto riflettere su quanto coraggio civile serva per dire la verità.',
            foto: [`${base}/saviano.png`],
            link: []
          }
        ]
      },
      {
        materia: 'Storia',
        progetti: [
          {
            id: 'aktion',
            titolo: 'Aktion T4 e Progetto Lebensborn',
            tipo: 'Ricerca Storica',
            descrizione:
              "L'Aktion T4 e il progetto Lebensborn rappresentano due facce della stessa medaglia: l'ideologia nazista della purezza della razza applicata in direzioni opposte. Da un lato l'Aktion T4, il programma di eutanasia involontaria con cui vennero uccise oltre 70.000 persone con disabilità fisiche o mentali — eliminate perché considerate 'vite indegne di essere vissute'. Dall'altro il Lebensborn, una rete di istituti pensata per far nascere e crescere bambini ritenuti 'ariani puri', figli di SS selezionati. Due programmi opposti nella forma, identici nell'aberrazione.",
            foto: [`${base}/aktion.jpeg`],
            link: []
          },
          {
            id: 'costituzione',
            titolo: 'La Costituzione Italiana',
            tipo: 'Diritto & Istituzioni',
            descrizione:
              "A lezione abbiamo studiato la Costituzione Italiana partendo dalla sua nascita: l'Assemblea Costituente, eletta nel 1946 e composta da 556 persone, lavorò per oltre un anno riuscendo a trovare un compromesso tra le diverse ideologie dei suoi componenti, approvando il testo il 22 dicembre 1947 — entrato in vigore il 1° gennaio 1948. Abbiamo analizzato la struttura della Costituzione, composta da 139 articoli e 18 disposizioni transitorie, soffermandoci sui primi 12 — i Principi Fondamentali: il principio democratico e la sovranità popolare (art. 1), i diritti inviolabili (art. 2), l'uguaglianza formale e sostanziale (art. 3), il diritto e dovere al lavoro (artt. 1 e 4), il pluralismo (artt. 5-9), il ripudio della guerra e l'apertura internazionale (artt. 10-11) e la bandiera tricolore (art. 12). Il percorso ha incluso anche il discorso di Piero Calamandrei sulla Costituzione e la lettura di Benigni degli articoli in TV.",
            foto: [`${base}/COST.jpg`],
            link: []
          },
          {
            id: 'sessantotto',
            titolo: "Il Movimento del '68",
            tipo: 'Storia & Società',
            descrizione:
              "A lezione abbiamo studiato il Sessantotto come un vasto movimento di contestazione contro il capitalismo e la società borghese, che coinvolse non solo gli studenti universitari ma anche gli operai nelle fabbriche e i detenuti nelle carceri. Nel mondo scolastico la protesta fu radicale: a febbraio del 1968 tutte le università erano occupate, e il 1° marzo a Roma lo sgombero della facoltà di architettura sfociò nello scontro con la polizia, passato alla storia come la Battaglia di Valle Giulia. Nelle fabbriche gli operai rivendicavano riduzione dell'orario di lavoro e migliori condizioni di vita — la Battaglia di Corso Traiano a Torino nel luglio 1969 fu uno dei momenti più accesi. Il movimento portò risultati concreti: riduzione dell'orario settimanale a 40 ore, Statuto dei Lavoratori nel 1970, referendum sul divorzio nel 1974 e legge sull'aborto nel 1978. Non mancarono però i limiti: la massificazione degli ideali, la degenerazione in violenza e un diffuso clima di lassismo.",
            foto: [`${base}/68.jpeg`],
            link: []
          }
        ]
      }
    ]
  }
];