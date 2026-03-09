# 📄 Documentação do `manager.sh`

O **`manager.sh`** é um script de automação (CLI Dashboard) projetado para centralizar o fluxo de trabalho de estudos. Ele utiliza ferramentas modernas de terminal para criar menus interativos, gerenciar processos e navegar por arquivos.

## Dependências Necessárias
Para que o script funcione corretamente, as seguintes ferramentas devem estar instaladas no seu sistema Linux:

1.  **Gum**: Usado para os menus, spinners e estilos.
    *   Instalação: `go install github.com/charmbracelet/gum@latest` (ou via gerenciador de pacotes da sua distro).
2.  **FZF**: Usado para a busca fuzzy de arquivos.
    *   Instalação: `sudo apt install fzf` (ou equivalente).
3.  **Kitty**: O emulador de terminal que o script tenta abrir para rodar os servidores.
    *   *Nota*: Se você usar outro terminal (como Gnome Terminal, Alacritty, etc.), precisará ajustar a função `run_in_new_terminal`.

## Como Usar
1.  Dê permissão de execução ao arquivo:
    ```bash
    chmod +x manager.sh
    ```
2.  Execute o script:
    ```bash
    ./manager.sh
    ```
3.  Navegue pelo menu usando as **setas** e pressione **Enter** para selecionar.

---

## 🛠️ Como Adicionar Mais Projetos

Para adicionar um novo projeto ao seu gerenciador, você precisa editar o `manager.sh` e seguir estes 4 passos:

### 1. Definir o Caminho do Projeto
No início do arquivo, onde as variáveis são definidas, adicione o caminho para o seu novo projeto.

```bash
# ... variáveis existentes ...
NOVO_PROJETO_DIR="$ROOT_DIR/caminho/para/novo-projeto"
```

### 2. Criar a Função de Execução
Crie uma função para verificar dependências e rodar o projeto. Você pode copiar a estrutura de `run_react` ou `run_json`.

```bash
run_novo_projeto() {
    # Verifica se a pasta existe
    if [ ! -d "$NOVO_PROJETO_DIR" ]; then
        gum style --foreground 196 "Diretório não encontrado: $NOVO_PROJETO_DIR"
        return
    fi

    # (Opcional) Verifica node_modules
    if [ ! -d "$NOVO_PROJETO_DIR/node_modules" ]; then
        cd "$NOVO_PROJETO_DIR" || return
        gum confirm "Instalar dependências?" && gum spin -- npm install
        cd "$ROOT_DIR" || return
    fi

    gum style --foreground 212 "🚀 Iniciando Novo Projeto..."
    
    # Comando para rodar (ex: npm start, python main.py, etc)
    run_in_new_terminal "$NOVO_PROJETO_DIR" "npm run dev" "Meu Novo Projeto"
}
```

### 3. Adicionar ao Menu Principal
Encontre o comando `gum choose` dentro do loop `while` e adicione sua nova opção.

```bash
    ACTION=$(gum choose \
        --cursor.foreground 122 \
        # ... outras opções ...
        "💰 Rodar Finance App (JSON Server)" \
        "🚀 Rodar Novo Projeto" \  # <--- Adicione aqui
        "🔍 Explorar/Editar Arquivos (fzf)" \
        "🚪 Sair")
```

### 4. Configurar a Ação no `case`
Logo abaixo do menu, adicione a lógica para quando sua opção for escolhida.

```bash
    case "$ACTION" in
        # ... outros cases ...
        "🚀 Rodar Novo Projeto")
            run_novo_projeto
            ;;
        # ...
    esac
```