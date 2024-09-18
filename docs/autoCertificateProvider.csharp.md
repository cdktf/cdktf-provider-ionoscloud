# `autoCertificateProvider` Submodule <a name="`autoCertificateProvider` Submodule" id="@cdktf/provider-ionoscloud.autoCertificateProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoCertificateProvider <a name="AutoCertificateProvider" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/auto_certificate_provider ionoscloud_auto_certificate_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new AutoCertificateProvider(Construct Scope, string Id, AutoCertificateProviderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig">AutoCertificateProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig">AutoCertificateProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.putExternalAccountBinding">PutExternalAccountBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.resetExternalAccountBinding">ResetExternalAccountBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExternalAccountBinding` <a name="PutExternalAccountBinding" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.putExternalAccountBinding"></a>

```csharp
private void PutExternalAccountBinding(AutoCertificateProviderExternalAccountBinding Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.putExternalAccountBinding.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBinding">AutoCertificateProviderExternalAccountBinding</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.putTimeouts"></a>

```csharp
private void PutTimeouts(AutoCertificateProviderTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeouts">AutoCertificateProviderTimeouts</a>

---

##### `ResetExternalAccountBinding` <a name="ResetExternalAccountBinding" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.resetExternalAccountBinding"></a>

```csharp
private void ResetExternalAccountBinding()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AutoCertificateProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

AutoCertificateProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

AutoCertificateProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

AutoCertificateProvider.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

AutoCertificateProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AutoCertificateProvider resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AutoCertificateProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AutoCertificateProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/auto_certificate_provider#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AutoCertificateProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.externalAccountBinding">ExternalAccountBinding</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference">AutoCertificateProviderExternalAccountBindingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference">AutoCertificateProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.externalAccountBindingInput">ExternalAccountBindingInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBinding">AutoCertificateProviderExternalAccountBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.serverInput">ServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.server">Server</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ExternalAccountBinding`<sup>Required</sup> <a name="ExternalAccountBinding" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.externalAccountBinding"></a>

```csharp
public AutoCertificateProviderExternalAccountBindingOutputReference ExternalAccountBinding { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference">AutoCertificateProviderExternalAccountBindingOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.timeouts"></a>

```csharp
public AutoCertificateProviderTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference">AutoCertificateProviderTimeoutsOutputReference</a>

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `ExternalAccountBindingInput`<sup>Optional</sup> <a name="ExternalAccountBindingInput" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.externalAccountBindingInput"></a>

```csharp
public AutoCertificateProviderExternalAccountBinding ExternalAccountBindingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBinding">AutoCertificateProviderExternalAccountBinding</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.serverInput"></a>

```csharp
public string ServerInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.server"></a>

```csharp
public string Server { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutoCertificateProviderConfig <a name="AutoCertificateProviderConfig" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new AutoCertificateProviderConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Email,
    string Location,
    string Name,
    string Server,
    AutoCertificateProviderExternalAccountBinding ExternalAccountBinding = null,
    string Id = null,
    AutoCertificateProviderTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.email">Email</a></code> | <code>string</code> | The email address of the certificate requester. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.location">Location</a></code> | <code>string</code> | The location of the certificate provider. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.name">Name</a></code> | <code>string</code> | The name of the certificate provider. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.server">Server</a></code> | <code>string</code> | The URL of the certificate provider. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.externalAccountBinding">ExternalAccountBinding</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBinding">AutoCertificateProviderExternalAccountBinding</a></code> | external_account_binding block. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/auto_certificate_provider#id AutoCertificateProvider#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeouts">AutoCertificateProviderTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

The email address of the certificate requester.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/auto_certificate_provider#email AutoCertificateProvider#email}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the certificate provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/auto_certificate_provider#location AutoCertificateProvider#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the certificate provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/auto_certificate_provider#name AutoCertificateProvider#name}

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.server"></a>

```csharp
public string Server { get; set; }
```

- *Type:* string

The URL of the certificate provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/auto_certificate_provider#server AutoCertificateProvider#server}

---

##### `ExternalAccountBinding`<sup>Optional</sup> <a name="ExternalAccountBinding" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.externalAccountBinding"></a>

```csharp
public AutoCertificateProviderExternalAccountBinding ExternalAccountBinding { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBinding">AutoCertificateProviderExternalAccountBinding</a>

external_account_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/auto_certificate_provider#external_account_binding AutoCertificateProvider#external_account_binding}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/auto_certificate_provider#id AutoCertificateProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderConfig.property.timeouts"></a>

```csharp
public AutoCertificateProviderTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeouts">AutoCertificateProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/auto_certificate_provider#timeouts AutoCertificateProvider#timeouts}

---

### AutoCertificateProviderExternalAccountBinding <a name="AutoCertificateProviderExternalAccountBinding" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new AutoCertificateProviderExternalAccountBinding {
    string KeyId,
    string KeySecret
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBinding.property.keyId">KeyId</a></code> | <code>string</code> | The key ID of the external account binding. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBinding.property.keySecret">KeySecret</a></code> | <code>string</code> | The secret of the external account binding. |

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBinding.property.keyId"></a>

```csharp
public string KeyId { get; set; }
```

- *Type:* string

The key ID of the external account binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/auto_certificate_provider#key_id AutoCertificateProvider#key_id}

---

##### `KeySecret`<sup>Required</sup> <a name="KeySecret" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBinding.property.keySecret"></a>

```csharp
public string KeySecret { get; set; }
```

- *Type:* string

The secret of the external account binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/auto_certificate_provider#key_secret AutoCertificateProvider#key_secret}

---

### AutoCertificateProviderTimeouts <a name="AutoCertificateProviderTimeouts" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new AutoCertificateProviderTimeouts {
    string Create = null,
    string Default = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/auto_certificate_provider#create AutoCertificateProvider#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeouts.property.default">Default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/auto_certificate_provider#default AutoCertificateProvider#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/auto_certificate_provider#delete AutoCertificateProvider#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/auto_certificate_provider#update AutoCertificateProvider#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/auto_certificate_provider#create AutoCertificateProvider#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeouts.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/auto_certificate_provider#default AutoCertificateProvider#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/auto_certificate_provider#delete AutoCertificateProvider#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/auto_certificate_provider#update AutoCertificateProvider#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutoCertificateProviderExternalAccountBindingOutputReference <a name="AutoCertificateProviderExternalAccountBindingOutputReference" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new AutoCertificateProviderExternalAccountBindingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.property.keyIdInput">KeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.property.keySecretInput">KeySecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.property.keySecret">KeySecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBinding">AutoCertificateProviderExternalAccountBinding</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.property.keyIdInput"></a>

```csharp
public string KeyIdInput { get; }
```

- *Type:* string

---

##### `KeySecretInput`<sup>Optional</sup> <a name="KeySecretInput" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.property.keySecretInput"></a>

```csharp
public string KeySecretInput { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `KeySecret`<sup>Required</sup> <a name="KeySecret" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.property.keySecret"></a>

```csharp
public string KeySecret { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBindingOutputReference.property.internalValue"></a>

```csharp
public AutoCertificateProviderExternalAccountBinding InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderExternalAccountBinding">AutoCertificateProviderExternalAccountBinding</a>

---


### AutoCertificateProviderTimeoutsOutputReference <a name="AutoCertificateProviderTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new AutoCertificateProviderTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.autoCertificateProvider.AutoCertificateProviderTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



