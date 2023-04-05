
import { Grid, Button, Container, TextField, } from "@mui/material";
import React, { useState } from "react";
import './Home.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Home() {
    const [nomeClasse, setNomeClasse] = useState('');
    const [atributos, setAtributos] = useState([]);
    const [phpCode, setPhpCode] = useState('');
    const [copiado, setCopiado] = useState(false);

    const handleNomeClasseChange = (event) => {
        setNomeClasse(event.target.value);
    };

    const handleAtributoChange = (event, index) => {
        const newAtributos = [...atributos];
        newAtributos[index] = event.target.value;
        setAtributos(newAtributos);
    };

    const handleAdicionarAtributo = () => {
        setAtributos([...atributos, '']);
    };

    const handleGerarCodigo = () => {
        let codigoPhp = `class ${nomeClasse} {\n`;
        for (let i = 0; i < atributos.length; i++) {
            const atributo = atributos[i];
            const atributoComPrimeiraLetraMaiuscula = atributo.charAt(0).toUpperCase() + atributo.slice(1);
            codigoPhp += `  private $${atributo};\n`;
            codigoPhp += `  public function set${atributoComPrimeiraLetraMaiuscula}($${atributo}) {\n`;
            codigoPhp += `    $this->${atributo} = $${atributo};\n`;
            codigoPhp += '  }\n';
            codigoPhp += `  public function get${atributoComPrimeiraLetraMaiuscula}() {\n`;
            codigoPhp += `    return $this->${atributo};\n`;
            codigoPhp += '  }\n';
        }
        codigoPhp += '}\n';
        setPhpCode(codigoPhp);
        setCopiado(false);
    };


    const handleCopiarCodigo = () => {
        navigator.clipboard.writeText(phpCode);
        setCopiado(true);
    };
    return (
        <Container sx={{ marginTop: '2rem' }}>
            <h2 className="mt-2">Gerador de Classe PHP</h2>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <div>
                        <TextField
                            label="Nome da Classe"
                            value={nomeClasse}
                            onChange={handleNomeClasseChange}
                        />
                    </div>
                    <div>
                        <h4>Atributos:</h4>
                        {atributos.map((atributo, index) => (
                            <div key={index}>
                                <TextField
                                    label={`Atributo ${index + 1}`}
                                    value={atributo}
                                    onChange={(event) => handleAtributoChange(event, index)}
                                    sx={{ marginTop: '1rem' }}
                                />
                            </div>
                        ))}
                        <Button sx={{ marginTop: '1rem' }} variant="contained" color="primary" onClick={handleAdicionarAtributo}>
                            Adicionar Atributo
                        </Button>
                    </div>
                    <Button sx={{ marginTop: '2rem' }} variant="contained" color="primary" onClick={handleGerarCodigo}>
                        Gerar Código PHP
                    </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    {phpCode && (
                        <div className="mt-4 code-container">
                            <h4>Código PHP Gerado:</h4>
                            <SyntaxHighlighter language="php" style={darcula}>
                                {phpCode}
                            </SyntaxHighlighter>
                            <Button variant="contained" color="primary" onClick={handleCopiarCodigo}>
                                {copiado ? 'Código Copiado!' : 'Copiar Código'}
                            </Button>
                        </div>
                    )}
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home;