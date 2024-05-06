# Build application
#
# Copy in all crates, Cargo.toml and Cargo.lock unmodified,
# and build the application.
FROM rust:1.75-bullseye AS builder
# ARG PROFILE=release
ARG GIT_REVISION
ENV GIT_REVISION=$GIT_REVISION
WORKDIR "$WORKDIR/sui"

# sui-indexer needs postgres libpq5 and ca-certificates
RUN apt update && apt install -y libpq5 ca-certificates libpq-dev postgresql

RUN apt-get update && apt-get install -y cmake clang

COPY ../../Cargo.toml Cargo.lock ./
COPY ../../consensus consensus
COPY ../../crates crates
COPY ../../sui-execution sui-execution
COPY ../../narwhal narwhal
COPY ../../external-crates external-crates

RUN cargo build --profile release --bin sui-indexer

# Production Image
FROM debian:bullseye-slim AS runtime
WORKDIR "$WORKDIR/sui"
COPY --from=builder /sui/target/release/sui-indexer /usr/local/bin
RUN apt update && apt install -y libpq5 ca-certificates libpq-dev postgresql

ARG BUILD_DATE
ARG GIT_REVISION
LABEL build-date=$BUILD_DATE
LABEL git-revision=$GIT_REVISION

# Copy the indexer.sh from the correct subdirectory
COPY ./indexer.sh ./indexer.sh

# Ensure the script is executable
RUN chmod +x ./indexer.sh

# Command to run when starting the container
CMD ["./indexer.sh"]
