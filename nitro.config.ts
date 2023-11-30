const runtimeConfig = useRuntimeConfig()

export default defineNitroConfig({
    preset: runtimeConfig.nitro_preset
})
