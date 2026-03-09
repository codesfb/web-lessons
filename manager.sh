#!/bin/bash

# ==============================================================================
# MANAGER.SH - Gerenciador de Estudos Web
# ==============================================================================
# Este script atua como um hub central para:
# 1. Gerenciar e executar projetos React e JSON Server.
# 2. Verificar e instalar dependências (node_modules) automaticamente.
# 3. Explorar e editar arquivos rapidamente usando fzf.
#
# Dependências: gum, fzf, kitty (terminal)
# ==============================================================================

# Configurações de Caminhos (Baseados no contexto)
ROOT_DIR="/home/fb_plasma/web-lessons"
REACT_DIR="$ROOT_DIR/react/my-lab"
JSON_DIR="$ROOT_DIR/json/ Finance Control App"



# --- Verificação de Dependências do Sistema ---
if ! command -v gum &> /dev/null; then
    echo "❌ Erro: 'gum' não está instalado. Instale com: go install github.com/charmbracelet/gum@latest"
    exit 1
fi

if ! command -v fzf &> /dev/null; then
    echo "❌ Erro: 'fzf' não está instalado."
    exit 1
fi

# --- Funções Auxiliares ---

# run_in_new_terminal
# Abre uma nova janela do terminal (Kitty) executando o comando especificado.
# Mantém a janela aberta após o término para visualização de logs/erros.
run_in_new_terminal() {
    local DIR="$1"
    local CMD="$2"
    local TITLE="$3"

    # Monta o comando: entra na pasta, roda o script e espera um Enter no final para não fechar a janela se der erro
    local FULL_CMD="cd \"$DIR\" && $CMD; echo ''; echo 'Processo finalizado. Pressione Enter para fechar...'; read"

    if command -v kitty &> /dev/null; then
        kitty --title "$TITLE" bash -c "$FULL_CMD" &
    else
        gum style --foreground 196 "❌ Erro: 'kitty' não encontrado."
    fi
}

# --- Funções de Projetos ---

# Executa o ambiente de laboratório React
run_react() {
    if [ ! -d "$REACT_DIR" ]; then
        gum style --foreground 196 "Diretório não encontrado: $REACT_DIR"
        return
    fi

    # Verifica node_modules antes de abrir o terminal
    if [ ! -d "$REACT_DIR/node_modules" ]; then
        cd "$REACT_DIR" || return
        gum confirm "node_modules não encontrado. Deseja instalar dependências?" && gum spin --title "Instalando..." -- npm install
        cd "$ROOT_DIR" || return
    fi

    gum style --foreground 212 "⚛️  Abrindo React Lab em novo terminal..."
    run_in_new_terminal "$REACT_DIR" "npm run dev" "React Lab"
}

# Executa o Finance App (Backend JSON Server + Frontend React)
run_json() {
    if [ ! -f "$JSON_DIR/db.json" ]; then
        gum style --foreground 196 "Arquivo db.json não encontrado em $JSON_DIR!"
        return
    fi

    gum style --foreground 220 "💰 Abrindo JSON Server em novo terminal..."
    run_in_new_terminal "$JSON_DIR" "npx json-server db.json" "Finance App Server"

    # Verifica dependências do React antes de abrir
    if [ ! -d "$JSON_DIR/node_modules" ]; then
        cd "$JSON_DIR" || return
        gum confirm "node_modules do React não encontrado. Instalar?" && gum spin --title "Instalando..." -- npm install
        cd "$ROOT_DIR" || return
    fi

    gum style --foreground 212 "⚛️  Abrindo React App em novo terminal..."
    run_in_new_terminal "$JSON_DIR" "npm run dev" "Finance App Client (React)"
}

# Navegador de arquivos interativo usando FZF
explore_files() {
    cd "$ROOT_DIR"
    gum style --foreground 99 "🔍 Selecione um arquivo para editar (ESC para sair)"
    
    # Usa fzf para encontrar arquivos, ignorando node_modules e .git
    FILE=$(find . -type f -not -path '*/.*' -not -path '*/node_modules/*' | fzf --height 40% --layout=reverse --border --preview 'cat {}')
    
    if [ -n "$FILE" ]; then
        # Abre com o editor padrão (vim, nano, code, etc) ou nano se não definido
        ${EDITOR:-nano} "$FILE"
    fi
}

# --- Loop Principal da Interface (TUI) ---
while true; do
    clear
    gum style \
        --border double \
        --margin "1" \
        --padding "1 2" \
        --border-foreground 27 \
        --foreground 255 \
        "WEB LESSONS MANAGER" \
        "Gerencie seus estudos de React e JSON"\
        "Seja muito bem vindo ao web lessons "\
        "O que gostaria de fazer agora sir?"

    echo ""
    
    ACTION=$(gum choose \
        --cursor.foreground 122 \
        --item.foreground 240 \
        --selected.foreground 255 \
        "⚛️  Rodar React Lab" \
        "💰 Rodar Finance App (JSON Server)" \
        "🔍 Explorar/Editar Arquivos (fzf)" \
        "🚪 Sair")

    case "$ACTION" in
        "⚛️  Rodar React Lab")
            run_react
            ;;
        "💰 Rodar Finance App (JSON Server)")
            run_json
            ;;
        "🔍 Explorar/Editar Arquivos (fzf)")
            explore_files
            ;;
        "🚪 Sair")
            gum style --foreground 212 "Bons estudos! 👋"
            exit 0
            ;;
    esac
    
    # Pausa antes de limpar a tela se o comando terminar (exceto se for sair)
    echo ""
    gum style --faint "Pressione qualquer tecla para voltar ao menu..."
    read -n 1 -s -r
done