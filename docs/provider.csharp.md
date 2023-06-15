# `provider`

Refer to the Terraform Registory for docs: [`ionoscloud`](https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-ionoscloud.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IonoscloudProvider <a name="IonoscloudProvider" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs ionoscloud}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new IonoscloudProvider(Construct Scope, string Id, IonoscloudProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig">IonoscloudProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig">IonoscloudProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetRetries">ResetRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetToken">ResetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetEndpoint"></a>

```csharp
private void ResetEndpoint()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetRetries` <a name="ResetRetries" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetRetries"></a>

```csharp
private void ResetRetries()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetToken"></a>

```csharp
private void ResetToken()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.resetUsername"></a>

```csharp
private void ResetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

IonoscloudProvider.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

IonoscloudProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

IonoscloudProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.retriesInput">RetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.retries">Retries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `RetriesInput`<sup>Optional</sup> <a name="RetriesInput" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.retriesInput"></a>

```csharp
public double RetriesInput { get; }
```

- *Type:* double

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.retries"></a>

```csharp
public double Retries { get; }
```

- *Type:* double

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.provider.IonoscloudProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IonoscloudProviderConfig <a name="IonoscloudProviderConfig" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new IonoscloudProviderConfig {
    string Alias = null,
    string Endpoint = null,
    string Password = null,
    double Retries = null,
    string Token = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.endpoint">Endpoint</a></code> | <code>string</code> | IonosCloud REST API URL. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.password">Password</a></code> | <code>string</code> | IonosCloud password for API operations. If token is provided, token is preferred. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.retries">Retries</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs#retries IonoscloudProvider#retries}. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.token">Token</a></code> | <code>string</code> | IonosCloud bearer token for API operations. |
| <code><a href="#@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.username">Username</a></code> | <code>string</code> | IonosCloud username for API operations. If token is provided, token is preferred. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs#alias IonoscloudProvider#alias}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

IonosCloud REST API URL.

Usually not necessary to be set, SDKs know internally how to route requests to the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs#endpoint IonoscloudProvider#endpoint}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

IonosCloud password for API operations. If token is provided, token is preferred.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs#password IonoscloudProvider#password}

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.retries"></a>

```csharp
public double Retries { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs#retries IonoscloudProvider#retries}.

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

IonosCloud bearer token for API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs#token IonoscloudProvider#token}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-ionoscloud.provider.IonoscloudProviderConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

IonosCloud username for API operations. If token is provided, token is preferred.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs#username IonoscloudProvider#username}

---



