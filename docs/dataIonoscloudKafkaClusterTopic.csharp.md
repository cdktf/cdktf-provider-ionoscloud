# `dataIonoscloudKafkaClusterTopic` Submodule <a name="`dataIonoscloudKafkaClusterTopic` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudKafkaClusterTopic <a name="DataIonoscloudKafkaClusterTopic" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/data-sources/kafka_cluster_topic ionoscloud_kafka_cluster_topic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudKafkaClusterTopic(Construct Scope, string Id, DataIonoscloudKafkaClusterTopicConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig">DataIonoscloudKafkaClusterTopicConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig">DataIonoscloudKafkaClusterTopicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.resetPartialMatch">ResetPartialMatch</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPartialMatch` <a name="ResetPartialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.resetPartialMatch"></a>

```csharp
private void ResetPartialMatch()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataIonoscloudKafkaClusterTopic resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

DataIonoscloudKafkaClusterTopic.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

DataIonoscloudKafkaClusterTopic.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

DataIonoscloudKafkaClusterTopic.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

DataIonoscloudKafkaClusterTopic.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataIonoscloudKafkaClusterTopic resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataIonoscloudKafkaClusterTopic to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataIonoscloudKafkaClusterTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/data-sources/kafka_cluster_topic#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudKafkaClusterTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.numberOfPartitions">NumberOfPartitions</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.replicationFactor">ReplicationFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.retentionTime">RetentionTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.segmentBytes">SegmentBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.partialMatchInput">PartialMatchInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.partialMatch">PartialMatch</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `NumberOfPartitions`<sup>Required</sup> <a name="NumberOfPartitions" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.numberOfPartitions"></a>

```csharp
public double NumberOfPartitions { get; }
```

- *Type:* double

---

##### `ReplicationFactor`<sup>Required</sup> <a name="ReplicationFactor" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.replicationFactor"></a>

```csharp
public double ReplicationFactor { get; }
```

- *Type:* double

---

##### `RetentionTime`<sup>Required</sup> <a name="RetentionTime" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.retentionTime"></a>

```csharp
public double RetentionTime { get; }
```

- *Type:* double

---

##### `SegmentBytes`<sup>Required</sup> <a name="SegmentBytes" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.segmentBytes"></a>

```csharp
public double SegmentBytes { get; }
```

- *Type:* double

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PartialMatchInput`<sup>Optional</sup> <a name="PartialMatchInput" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.partialMatchInput"></a>

```csharp
public object PartialMatchInput { get; }
```

- *Type:* object

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PartialMatch`<sup>Required</sup> <a name="PartialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.partialMatch"></a>

```csharp
public object PartialMatch { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopic.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudKafkaClusterTopicConfig <a name="DataIonoscloudKafkaClusterTopicConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudKafkaClusterTopicConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterId,
    string Location,
    string Id = null,
    string Name = null,
    object PartialMatch = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | The ID of the Kafka Cluster that the topic belongs to. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.location">Location</a></code> | <code>string</code> | The location of your Kafka Cluster Topic. Supported locations: de/fra, de/txl, es/vit, gb/lhr, us/ewr, us/las, us/mci, fr/par. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.id">Id</a></code> | <code>string</code> | The ID of the Kafka Cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.name">Name</a></code> | <code>string</code> | The name of your Kafka Cluster Topic. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.partialMatch">PartialMatch</a></code> | <code>object</code> | Whether partial matching is allowed or not when using the name filter. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

The ID of the Kafka Cluster that the topic belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/data-sources/kafka_cluster_topic#cluster_id DataIonoscloudKafkaClusterTopic#cluster_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of your Kafka Cluster Topic. Supported locations: de/fra, de/txl, es/vit, gb/lhr, us/ewr, us/las, us/mci, fr/par.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/data-sources/kafka_cluster_topic#location DataIonoscloudKafkaClusterTopic#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The ID of the Kafka Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/data-sources/kafka_cluster_topic#id DataIonoscloudKafkaClusterTopic#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of your Kafka Cluster Topic.

Must be 63 characters or less and must begin and end with an alphanumeric character (`[a-z0-9A-Z]`) with dashes (`-`), underscores (`_`), dots (`.`), and alphanumerics between.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/data-sources/kafka_cluster_topic#name DataIonoscloudKafkaClusterTopic#name}

---

##### `PartialMatch`<sup>Optional</sup> <a name="PartialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudKafkaClusterTopic.DataIonoscloudKafkaClusterTopicConfig.property.partialMatch"></a>

```csharp
public object PartialMatch { get; set; }
```

- *Type:* object

Whether partial matching is allowed or not when using the name filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/data-sources/kafka_cluster_topic#partial_match DataIonoscloudKafkaClusterTopic#partial_match}

---



