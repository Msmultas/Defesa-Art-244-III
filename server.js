const express = require('express');
const PDFDocument = require('pdfkit');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const { format } = require('date-fns');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(bodyParser.json());

app.post('/gerar-pdf', (req, res) => {
  const respostas = req.body;

      const doc = new PDFDocument();

  doc.fontSize(16).font('Helvetica-Bold').text('EXCELENTÍSSIMO(A) SR.(A) AUTORIDADE COMPETENTE JULGADORA DAS INFRAÇÕES DE TRÂNSITO', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica-Bold').text('AUTO DE INFRAÇÃO DE TRÂNSITO:', { continued: true }).fontSize(13).font('Helvetica').text(` ${respostas.autoinfracao}`, { align: 'left' });
  doc.fontSize(14).font('Helvetica-Bold').text('AUTUADO(A):', { continued: true }).fontSize(13).font('Helvetica').text(` ${respostas.nome}`, { align: 'left' });
  doc.moveDown(); 

  doc.fontSize(15).font('Helvetica-Bold').text('I – DA QUALIFICAÇÃO', { align: 'left' });
  doc.moveDown();
    
  doc.fontSize(14).font('Helvetica').text('Eu,', { continued: true }).text(` ${respostas.nome},`, { continued: true })
  .text(' do CPF:', { continued: true }).text(` ${respostas.cpf}`, { continued: true })
  .text(', CNH:', { continued: true }).text(` ${respostas.cnh}`, { continued: true })
  .text(', E-mail:', { continued: true }).text(` ${respostas.email}`, { continued: true })
  .text(', telefone:', { continued: true }).text(` ${respostas.telefone}`, { continued: true })
  doc.fontSize(14).font('Helvetica').text(' venho através deste apresentar defesa-prévia escrita, conforme disciplina o art. 281-A do Código de Trânsito Brasileiro:', { align: 'left' });
  doc.moveDown();
  
  doc.fontSize(15).font('Helvetica-Bold').text('II – DOS FATOS E DA SUPOSTA INFRAÇÃO', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('No dia', { continued: true }).text(` ${respostas.datamulta}`, { continued: true })   
  .text(',', { continued: true }).text(' o(a) autuado(a) conduzia seu veículo', { continued: true })
  .text(', placa:', { continued: true }).text(` ${respostas.placa}`, { continued: true })
  doc.fontSize(14).font('Helvetica').text('oportunidade que foi autuado pelo suposto cometimento da infração prevista no Art. 244, inciso III do Código de Trânsito Brasileiro.', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('Pela autoridade de trânsito foi lavrado auto de infração de trânsito de codificação', { continued: true }).text(` (${respostas.autoinfracao})`, { continued: true })
  doc.fontSize(14).font('Helvetica').text(', ocorre que a referida lavratura do auto de infração se deu fora da legalidade, bem como das regulamentações que tratam sobre o assunto.', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('Diante disso, e exercendo seu direito de contraditório e ampla defesa, pelos fundamentos que fundamentam esse pedido, venho expor e requerer o que segue, por ser medida de justiça!'),
  doc.moveDown();

  doc.fontSize(15).font('Helvetica-Bold').text('III - DAS PRELIMINARES', { align: 'left' });
  doc.moveDown();


  doc.fontSize(15).font('Helvetica-Bold').text('III.I – DA NECESSIDADE DA JUNTADA DO AUTO DE INFRAÇÃO NESTE PROCESSO', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('É sabido que na legislação que o auto de infração será arquivado e seu registro julgado insubsistente, caso seja considerado inconsistente ou irregular (art. 281, § 1°, inciso I do Código de Trânsito Brasileiro), e não tendo o agente de trânsito adotado os cuidados necessários no momento do preenchimento do auto de infração, é possível dizer que ocorreu vício formal na prática do ato administrativo quando da lavratura do respectivo documento.'),
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('É sabido ainda que as informações referentes à caracterização da infração devem constar em todas as vias do auto de infração de trânsito (AIT), além disso, é pacífico o entendimento de que quando o auto de infração for lavrado em suporte físico, não poderá conter rasuras, emendas, uso de corretivos, ou qualquer tipo de adulteração (MBFT), sendo pacífico perante a jurisprudência a necessidade do correto preenchimento do auto para que atinja a finalidade a qual se pretende ou seja, a aplicação da penalidade senão vejamos;'),
  doc.moveDown();

  doc.fontSize(12).font('Helvetica').text('Nesse sentido, em que pese a presunção de legitimidade dos atos administrativos, no caso não restou demonstrada a regularidade da autuação, pois o auto não apresenta os requisitos mínimos de identificação previstos na legislação, devendo ser anulado o auto de infração. TJDF; RInom 0715615-13.2016.8.07.0016; Segunda Turma Recursal dos juizados Especiais; Rel. Juiz João Luis Fischer Dias; Julg.08/02/2017; DJDFTE 14/02/2017; Pág. 763” “REEXAME NECESSÁRIO. MANDADO DE SEGURANÇA.INFRAÇÃO DE TRÂNSITO. EXCESSO DE VELOCIDADE.NULIDADE DO AUTO DE INFRAÇÃO DE TRÂNSITO E DA MULTA IMPOSTA POR AUSÊNCIA DE PROVA MATERIAL.POSSIBILIDADE. Auto de infração de trânsito que não observou os critérios básicos previstos no art. 280 do CTB. Fotografia do radar eletrônico ilegível. ATO administrativo ilegal. Segurança concedida em primeira instância. Sentença mantida. Reexame necessário improvido. (TJSP; RN 0003275- 61.2014.8.26.0035; Ac.8813478; Águas de Lindóia; Décima Segunda Câmara de Direito Público; Rel. Des. Venicio Salles; Julg. 17/09/2015; DJESP07/10/2015)', { align: 'right' });
  doc.moveDown();
  
  doc.fontSize(14).font('Helvetica').text('Conforme determina o art. 280 do Código de Trânsito Brasileiro, o auto de infração de trânsito é documento essencial para início do processo administrativo para aplicação da penalidade de multa, motivo pelo qual sua juntada é imprescindível.', { align: 'left' });
  doc.moveDown();


  doc.fontSize(15).font('Helvetica-Bold').text('III.II DO RECONHECIMENTO DE OFÍCIO DA DECADÊNCIA DO DIREITO DE PUNIR O(A) CONDUTOR(A)', { align: 'left' });
  doc.moveDown();


  doc.fontSize(14).font('Helvetica').text('Preliminarmente, importante trazer ainda o que traz o Art. 281, §1º do CTB quanto ao instituto da decadência, que dispõe, in verbis;', { align: 'left' });
  doc.moveDown(); 

  doc.fontSize(12).font('Helvetica').text('Art. 281 “A autoridade de trânsito, na esfera da competência estabelecida neste Código e dentro de sua circunscrição, julgará a consistência do auto de infração e aplicará a penalidade cabível.', { align: 'right' });
  doc.moveDown();
  doc.fontSize(12).font('Helvetica').text('§ 1º O auto de infração será arquivado e seu registro julgado insubsistente:', { align: 'right' });
  doc.moveDown();
  doc.fontSize(12).font('Helvetica').text('II - se, no prazo máximo de trinta dias, não for expedida a notificação da autuação', { align: 'right' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('Assim, a partir da letra da lei, faz-se imprescindível a análise pela autoridade competente quanto a consistência quando da expedição da notificação de autuação, contados da data do suposto cometimento da infração, e tendo essa extrapolado o prazo de 30 (trinta) dias deverá ser arquivado.', { align: 'left' });
  doc.moveDown(); 


  doc.fontSize(15).font('Helvetica-Bold').text('IV - DA OBSERVÂNCIA DAS QUESTÕES DE FORMAIS', { align: 'center' });
  doc.moveDown();

  doc.fontSize(15).font('Helvetica-Bold').text('IV.I DA NECESSIDADE DE INFORMAÇÕES COMPLEMENTARES NA LAVRATURA DO AUTO DE INFRAÇÃO DE TRÂNSITO ', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('Quando da tipificação da infração apontada pela autoridade de acordo com o código de trânsito brasileiro (Art. 244, III do Código de Trânsito Brasileiro), importante trazer que era imprescindível a anotação das informações complementares quanto a conduta/fato da infração quando da lavratura do auto, a fim de assegurar o enquadramento correto para o regular processamento da aplicação da penalidade pretendida.', { align: 'right' });
  doc.moveDown();
  doc.fontSize(14).font('Helvetica').text('Considerando que o artigo em questão se desdobra em mais de uma conduta, é necessário o apontamento de informações que especifiquem a conduta efetivamente praticada pelo condutor(a), conforme disposições do Manual Brasileiro de Fiscalização de Trânsito, que é de observância obrigatória.', { align: 'right' });
  doc.moveDown();
  doc.fontSize(14).font('Helvetica').text('Importante trazer ainda que os apontamentos das informações complementares estão intrinsicamente ligados à garantia do pleno exercício do direito de ampla defesa e contraditório e garantia dos princípios da legalidade e eficiência aos atos praticados pela administração pública, em especial daqueles que decorrerem aplicações de penalidades.', { align: 'right' });
  doc.moveDown();

  doc.fontSize(15).font('Helvetica-Bold').text('IV.II DA OBRIGATORIEDADE DA UTILIZAÇÃO DO MANUAL BRASILEIRO DE FISCALIZAÇÃO DE TRÂNSITO (MBFT)', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('Em complemento ao anteriormente tratado, é importante dizer ainda que além de observância obrigatória do Código de Trânsito Brasileiro, devem os órgãos julgadores de trânsito subordinação cogente ao cumprimento do Manual Brasileiro de Fiscalização de Trânsito, posto que é essencial para a atuação de primeira e segunda instância, haja vista que contém a interpretação correta acerca da aplicação da legislação de trânsito pelos órgãos competentes, ou seja, pelo SENATRAN e CONTRAN.',
  { align: 'left' });
  doc.moveDown();
  doc.fontSize(14).font('Helvetica').text('No caso em tela, é possível trazer o que o MBFT prevê quanto às informações necessárias à individualização da conduta/fato, a fim da perfeita aplicação da lei, conforme exemplos abaixo. ', { align: 'left' });
  doc.moveDown();

doc.image('./imagens-doc/foto6.png', { //caminho da imagem
  fit: [500, 500],  // ajuste de tamanho da imagem
  align: 'center',  // alinhamento da imagem
});
doc.moveDown();
  
  
  doc.fontSize(14).font('Helvetica').text('A titulo de exemplo verifica-se que o art. 244, III do CTB, com base na observância do MBFT, prevê no campo “Quando Autuar” a possibilidade de imputação de penalidade em várias possibilidades, ou seja, condutar distintas.', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('O campo contendo “Exemplo do Campo de Observações do AIT”, traz especificações individualizando a conduta do autuado, ocorre que isso não se verifica no auto de infração de trânsito, limitando sobremaneira o direito de defesa do autuado, haja vista que o administrado não se defende da disposição legal e sim de um fato jurídico embasado numa norma.' , { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('Dito isso, é evidente a necessidade da descrição dos fatos ocorridos quando do suposto cometimento da infração, sob pena de insubsistência do auto lavrado e consequente arquivamento, o que é o caso do presente caso.', { align: 'left' });
  doc.moveDown();

  doc.fontSize(15).font('Helvetica-Bold').text('V - DA GARANTIA DO DIREITO DA AMPLA DEFESA E DO CONTRADITÓRIO', { align: 'center' });
  doc.moveDown();
  
  doc.fontSize(14).font('Helvetica').text('Não obstante a tudo que foi exposto, é evidente que o cumprimento da legislação de trânsito é imprescindível para a garantia da segurança viária, no entanto, desde que respeitado o devido processo legal para a aplicação das penalidades previstas. ', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('O Art. 5º da Constituição da República Brasileira prevê como garantia fundamental o direito ao devido processo legal, senão vejamos;', { align: 'left' });
  doc.moveDown();

  doc.fontSize(12).font('Helvetica').text('Art. 5º Todos são iguais perante a lei, sem distinção de qualquer natureza, garantindo-se aos brasileiros e aos estrangeiros residentes no País a inviolabilidade do direito à vida, à liberdade, à igualdade, à segurança e à propriedade, nos termos seguintes:', { align: 'right' });
  doc.moveDown();

  doc.fontSize(12).font('Helvetica').text('LV - aos litigantes, em processo judicial ou administrativo, e aos acusados em geral são assegurados o contraditório e ampla defesa, com os meios e recursos a ela inerentes;', { align: 'right' });
  doc.moveDown();
  
  doc.fontSize(14).font('Helvetica').text('Assim, verifica-se que cabe à Administração Pública a aplicação/execução da Lei de transito, desde que garantido o devido processo legal, sendo então a correta tipificação e enquadramento, assim como as informações complementares pertinentes prestadas, de forma a possibilitar defesa ampla do(a) condutor(a) quanto aos fatos imputados.', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('Ainda neste sentido, a Administração Pública obriga-se ainda a observar os princípios de legalidade, impessoalidade, moralidade, publicidade e eficiência (Art. 37, CRFB/88), de forma que garanta a prática de ato administrativo certo e objetivo que embase o processo ao qual resultará na aplicação da penalidade pretendida.', { align: 'left' });
  doc.moveDown();
  
  doc.fontSize(15).font('Helvetica-Bold').text('VI – DOS PEDIDOS', { align: 'left' });
  doc.moveDown();

  doc.fontSize(14).font('Helvetica').text('O autuado, através da respectiva peça, vem requer: ', { align: 'left' });
  doc.moveDown();

  doc.fontSize(13).font('Helvetica').text('A) O recebimento desta defesa e dos documentos que a acompanham;', { align: 'left' });
  doc.moveDown();
  doc.fontSize(13).font('Helvetica').text('B) A juntada da cópia do auto de infração de trânsito de lavrado sob código', { continued: true });doc.fontSize(13).font('Helvetica').text(` ${respostas.autoinfracao}`, { align: 'left' });
  doc.moveDown();
  doc.fontSize(13).font('Helvetica-Bold').text('C) O arquivamento do auto de infração de código', { continued: true });doc.fontSize(13).font('Helvetica-Bold').text(` ${respostas.autoinfracao}`,{ continued: true });doc.fontSize(13).font('Helvetica-Bold').text(' haja vista reconhecimento de ofício ou diante das demais fundamentações trazidas.', { align: 'left' });
  doc.moveDown();
  doc.fontSize(13).font('Helvetica').text('D) A notificação do autuado no endereço cadastrado no sistema, devidamente informado, em caso de eventual imposição de penalidade.', { align: 'left' });
  doc.moveDown();

doc.fontSize(14).font('Helvetica').text('DATA:   ', { align: 'center', continued: true }).text('             '  +  respostas.datamulta, { align: 'center' });
doc.moveDown(4);

doc.fontSize(14).font('Helvetica').text('AUTUADO(A) - ', { continued: true }).fontSize(14).font('Helvetica').text(` ${respostas.nome}`, { align: 'left' });
doc.moveDown(2);

doc.fontSize(14).font('Helvetica').text('Assinatura:________________________________________________', { align: 'left' });
doc.moveDown(3);

doc.fontSize(14).font('Helvetica').text('(Documentos em Anexo)', { align: 'left' });
doc.moveDown();

doc.fontSize(14).font('Helvetica').text('- Carteira Nacional de Habilitação (CNH) do proprietário do veículo', { align: 'left' });
doc.moveDown(); 

doc.fontSize(14).font('Helvetica').text('- Documento do veículo', { align: 'left' });
doc.moveDown(); 














  

  











//--------------------------------------------------------------------------------------------
/*
  doc.fontSize(12).text('Pergunta: Qual é o seu nome completo?');
  doc.fontSize(12).text(`Resposta: ${respostas.nome}`);
  doc.moveDown();

  doc.fontSize(12).text('Pergunta: Informe o código do auto de infração de trânsito');
  doc.fontSize(12).text(`Resposta: ${respostas.autoinfracao}`);
  doc.moveDown();

  doc.fontSize(12).text('Pergunta: Qual é o seu CPF?');
  doc.fontSize(12).text(`Resposta: ${respostas.cpf}`);
*/
//-------------------------------------------------------------------------------------------
  const pdfFilename = 'Petição Modelo Art.244 III.pdf';
  const pdfPath = path.join(__dirname, 'backup', pdfFilename);
  const pdfStream = fs.createWriteStream(pdfPath);
  doc.pipe(pdfStream);
  doc.end();

  pdfStream.on('finish', () => {
    res.download(pdfPath, (err) => {
      if (err) {
        console.error('Erro ao realizar o download do arquivo PDF:', err);
        res.sendStatus(500);
      }

      // Criar uma cópia do arquivo na pasta 'cofre' com a data e hora do arquivo
      const now = new Date();
      const formattedDate = format(now, 'dd-MM-yyyy_HH-mm-ss');
      const copyFilename = `${formattedDate}_${pdfFilename}`;
      const copyPath = path.join(__dirname, 'cofre', copyFilename);
      fs.copyFileSync(pdfPath, copyPath);

      fs.unlinkSync(pdfPath); // Remover o arquivo PDF da pasta 'backup' após o download
    });
  });

  pdfStream.on('error', (err) => {
    console.error('Erro ao gerar o arquivo PDF:', err);
    res.sendStatus(500);
  });
});

app.listen(3000, () => {
  console.log('\x1b[34m%s\x1b[0m', 'Olá Brittes, seu servidor foi iniciado na porta 3000');
});

