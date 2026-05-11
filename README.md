<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  
  <br />

  <h1>Hospital NeoCare Hub - ARIA Chatbot</h1>
  <p><b>Dashboard médical intelligent avec intégration d'IA simulée</b></p>
</div>

---

### 📝 Description (FR)
Ce projet est un tableau de bord d'assistance médicale piloté par l'IA, développé dans le cadre de ma formation en Intelligence Artificielle. L'application intègre un chatbot médical nommé **ARIA** utilisant une logique de "keyword-matching", ainsi qu'une gestion d'état globale robuste via **Redux Toolkit**.

---

### 🚀 Démarrage Rapide

#### **Prérequis**
Vous devez avoir **Node.js** installé sur votre machine.

#### **Installation**
1. **Cloner le projet :**
   ```bash
   git clone [https://github.com/Nasrallah-Ouazzani-Chahdi/Nasrallah-Ouazzani-Chahdi-chatui-pro.git](https://github.com/Nasrallah-Ouazzani-Chahdi/Nasrallah-Ouazzani-Chahdi-chatui-pro.git)


Installation des dépendances :
    npm install

Lancer l'application :
    npm start


<h2>🛠️ Fonctionnalités Clés</h2>
Gestion d'État Globale : Utilisation de Redux Toolkit pour synchroniser le profil utilisateur, l'historique du chat et les préférences d'affichage (thème) sur toutes les pages.

Logique d'IA Simulée (Mock API) : Intégration d'un système de réponse basé sur des mots-clés via un fichier JSON pour simuler un diagnostic médical.

Design Réactif : Interface conçue avec CSS Flexbox pour un rendu centré et professionnel sur tous les écrans.

Mode Sombre : Support d'un thème sombre persistant activable via les paramètres.


<h2>📂 Structure du Projet</h2>

    src/store : Configuration Redux et Slices (Profil, Messages, Paramètres)

    src/pages : Composants React : Dashboard, Chat ARIA, et Settings

    src/data  : Données JSON contenant la logique de réponse et les déclencheurs du bot