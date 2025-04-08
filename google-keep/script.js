class App {
    constructor() {
        this.notes = [];
        this.noteUpdateId = null;

        this.$notesContainer = document.querySelector(".notes-container");
        this.$mainForm = document.querySelector(".main-form");
        this.$mainTextContainer = document.querySelector(".note-text-container");
        this.$saveButton = document.querySelector(".save-button");
        this.$title = document.querySelector(".note-title");
        this.$text = document.querySelector(".note-text");
        this.$modal = document.querySelector(".modal");
        this.$modalTitle = document.querySelector(".modal-title");
        this.$modalText = document.querySelector(".modal-text")

        this.render()
        this.addEventListeners();
    }


    addEventListeners() {
        document.addEventListener("click", (e) => {
            this.handleFormOpen(e);
            this.handleNoteDelete(e);
            this.handleNoteEdit(e);
            this.handleModal(e);
            this.changeNoteColor(e);
        });


        this.$mainForm.addEventListener("submit", (e) => {
            e.preventDefault();
            this.saveNote();
        });

        document.body.addEventListener("mouseover", (e) => {
            this.handleToolbox(e)
        })

        document.body.addEventListener("mouseout", (e) => {
            this.handleToolbox(e)
        })

    }

    handleFormOpen(e) {
        if (this.$mainForm.contains(e.target)) {
            this.$mainTextContainer.classList.add("note-text-container-opened")
            this.$title.classList.add("note-title-opened")
            this.$text.classList.add("note-text-opened")
            this.$saveButton.style.display = "block";
        } else {
            this.clearAndCollapse()
        }
    }

    saveNote() {
        // get values from inputs
        const title = this.$title.value;
        const text = this.$text.value;

        // if user typed something, create a new note
        if (title || text) {
            this.notes.push(
                {
                    title,
                    text,
                    id: this.notes.length ? this.notes[this.notes.length - 1].id + 1 : 1,
                    color: "white"
                }
            )
        }

        this.clearAndCollapse();
        this.render();
    }

    handleNoteDelete(e) {
        const toDelete = e.target.closest('.trash-icon');
        if (toDelete) {
            e.stopPropagation();
            const noteId = toDelete.dataset.id;
            this.deleteNote(noteId);
        }
    }

    deleteNote(noteId) {
        this.notes = this.notes.filter(note => Number(note.id) !== Number(noteId));
        this.render();
    }


    handleNoteEdit(e) {
        if (e.target.closest('.trash-icon')) return;
        if (e.target.closest('.toolbox-container')) return;
        const toEdit = e.target.closest('.note');
        if (toEdit) {
            const noteId = toEdit.dataset.id;
            this.openModal(noteId)
        }
    }

    openModal(noteId) {
        this.noteUpdateId = noteId;
        const noteIndex = this.notes.findIndex(note => Number(note.id) === Number(noteId));
        let { title, text } = this.notes[noteIndex];

        this.$modalTitle.value = title;
        this.$modalText.value = text;
        this.$modal.style.display = "flex";
    }

    handleModal(e) {
        const toHandleModal = e.target.closest('.modal-save-button');
        if (!toHandleModal) return;

        let toUpdateTitle = this.$modalTitle.value;
        let toUpdateText = this.$modalText.value;

        if (!toUpdateText && !toUpdateTitle) {
            this.deleteNote(this.noteUpdateId)
        } else {
            const noteIndex = this.notes.findIndex(note => Number(note.id) === Number(this.noteUpdateId));
            this.notes[noteIndex].title = toUpdateTitle;
            this.notes[noteIndex].text = toUpdateText;
        }
        this.$modal.style.display = "none";
        this.render()

    }

    clearAndCollapse() {
        // clearing the form
        this.$title.value = "";
        this.$text.value = "";

        // collapsing the input form
        this.$mainTextContainer.classList.remove("note-text-container-opened")
        this.$title.classList.remove("note-title-opened")
        this.$text.classList.remove("note-text-opened")
        this.$saveButton.style.display = "none";
    }

    handleToolbox(e) {
        console.log("triggered")

        const hoveredElement = e.target;
        const paletteIcon = hoveredElement.closest('.palette-icon');
        const toolboxContainer = hoveredElement.closest('.toolbox-container');
        const toolbox = document.querySelector('.toolbox-opened');

        const isHoveringToolboxArea = paletteIcon || hoveredElement.closest('.toolbox');

        // Close any open toolboxes if not hovering relevant area
        if (toolbox && !isHoveringToolboxArea) {
            toolbox.classList.remove('toolbox-opened');
            return;
        }

        if (paletteIcon && toolboxContainer) {
            document.querySelectorAll('.toolbox-opened').forEach(t => t.classList.remove('toolbox-opened'));
            
            const currentToolbox = toolboxContainer.querySelector('.toolbox');
            currentToolbox.classList.add('toolbox-opened');
        }
    }

    changeNoteColor(e) {
        const colorOption = e.target.closest('.toolbox-option');
        if (!colorOption) return;
        const currentNote = e.target.closest('.note')
        
        const selectedColor = colorOption.style.backgroundColor;
        
        const noteId = currentNote.dataset.id;
        this.notes = this.notes.map(note => {
            if (Number(note.id) === Number(noteId)) {
                note.color = selectedColor;
            }
            return note;
        })

        currentNote.querySelector('.toolbox').classList.remove('toolbox-opened');
        this.render()
    }

    render() { 
        const noteList = this.notes.map(note => {
            return `<div class="note" data-id="${note.id}" style="background-color: ${note.color}">
                        <h2>${note.title}</h2>
                        <p>${note.text}</p>
                        <div class="icons">
                            <div class="toolbox-container">
                                <i class="fa-solid fa-palette palette-icon" data-id="${note.id}"></i>
                                <div class="toolbox">
                                    <div class="toolbox-option" data-id="1" style="background-color: #F28B82;" title="Coral"></div>
                                    <div class="toolbox-option" data-id="2" style="background-color: #FBBC04;" title="Orange"></div>
                                    <div class="toolbox-option" data-id="3" style="background-color: #FFF475;" title="Yellow"></div>
                                    <div class="toolbox-option" data-id="4" style="background-color: #CCFF90;" title="Mint"></div>
                                    <div class="toolbox-option" data-id="5" style="background-color: #A7FFEB;" title="Aqua"></div>
                                    <div class="toolbox-option" data-id="6" style="background-color: #CBF0F8;" title="Sky"></div>
                                    <div class="toolbox-option" data-id="7" style="background-color: #D7AEFB;" title="Lavender"></div>
                                    <div class="toolbox-option" data-id="8" style="background-color: #FDCFE8;" title="Pink"></div>
                                    <div class="toolbox-option" data-id="9" style="background-color: #E6C9A8;" title="Beige"></div>
                                </div>
                            </div>
                            <div class="trash-icon-container">
                                <i class="fas fa-trash-alt trash-icon" data-action="delete" data-id="${note.id}"></i>
                            </div>
                        </div>
                    </div>`
        })
        this.$notesContainer.innerHTML = noteList.join("")
    }
}

new App();